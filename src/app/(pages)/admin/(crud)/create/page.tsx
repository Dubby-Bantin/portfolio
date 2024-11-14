"use client";

import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firestore, storage } from "@/app/lib/firebase/auth";
import ImageDropzone from "../../components/ImageDropZone"; // Adjust the path as necessary
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface BlogPost {
  title: string;
  category: string;
  introduction: string;
  paragraphs: { title: string; text: string; image: File | null }[];
  quote: string;
  conclusion: string; // Changed to string
}

const AddPostForm = () => {
  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    category: "",
    introduction: "",
    paragraphs: Array(5).fill({ title: "", text: "", image: null }),
    quote: "",
    conclusion: "", // Changed to string
  });
  const [loading, setLoading] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<string[]>(
    Array(5).fill("")
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    isParagraph?: boolean,
    isTitle?: boolean
  ) => {
    const { name, value } = e.target;
    if (isParagraph !== undefined && index !== undefined) {
      const updatedParagraphs = [...formData.paragraphs];
      if (isTitle) {
        updatedParagraphs[index] = {
          ...updatedParagraphs[index],
          title: value.trim(), // Update title
        };
      } else {
        updatedParagraphs[index] = {
          ...updatedParagraphs[index],
          text: value.trim(), // Update text
        };
      }
      setFormData((prev) => ({ ...prev, paragraphs: updatedParagraphs }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDrop = (acceptedFiles: File[], index: number) => {
    const file = acceptedFiles[0];
    if (!file) {return;}

    const updatedPreviews = [...imagePreviews];
    const reader = new FileReader();

    reader.onload = () => {
      updatedPreviews[index] = reader.result as string;
      setImagePreviews(updatedPreviews);

      const updatedParagraphs = [...formData.paragraphs];
      updatedParagraphs[index] = {
        ...updatedParagraphs[index],
        image: file, // Directly set the file as the image
      };
      setFormData((prev) => ({ ...prev, paragraphs: updatedParagraphs }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload paragraph images
      const uploadedImageUrls = await Promise.all(
        formData.paragraphs.map(async (para, index) => {
          if (para.image) {
            const imageRef = ref(
              storage,
              `/blogImageStorage/${formData.title}/paragraphImage${index + 1}/${
                para.image.name
              }`
            );
            await uploadBytes(imageRef, para.image);
            return await getDownloadURL(imageRef);
          }
          return ""; // Return empty string if image is null
        })
      );

      // Add document to Firestore
      await addDoc(collection(firestore, "blogPosts"), {
        ...formData,
        date: Timestamp.fromDate(new Date()),
        paragraphs: formData.paragraphs.map((para, index) => ({
          title: para.title,
          text: para.text,
          imageUrl: uploadedImageUrls[index], // Paragraph image URL
        })),
      });

      // Reset form after successful submission
      setFormData({
        title: "",
        category: "",
        introduction: "",
        paragraphs: Array(5).fill({ title: "", text: "", image: null }),
        quote: "",
        conclusion: "",
      });
      setImagePreviews(Array(5).fill("")); // Reset previews
      setLoading(false);
      alert("Blog post added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
      alert("Failed to add blog post. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a23] md:w-1/2 rounded-md">
        <div className="w-full max-w-2xl p-8 space-y-6 text-white rounded-lg shadow-lg">
          <h2 className="text-gradient">Add a New Blog Post</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div className="flex w-full justify-between gap-3">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium ml-1"
                >
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-[.33rem] bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium ml-1"
                >
                  Category
                </label>
                <Select
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, category: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Artificial Intelligence">
                      Artificial Intelligence
                    </SelectItem>
                    <SelectItem value="Web 3">Web 3</SelectItem>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="techlife">Tech Life</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Full Stack">Full Stack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label
                htmlFor="introduction"
                className="block text-sm font-medium ml-1"
              >
                Introduction
              </label>
              <textarea
                id="introduction"
                name="introduction"
                value={formData.introduction}
                onChange={handleInputChange}
                rows={4}
                required
                className="block w-full px-4 py-2 bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            {formData.paragraphs.map((para, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-2 ml-1">
                  Paragraph {index + 1}
                </label>

                <input
                  type="text"
                  value={para.title}
                  onChange={(e) => handleInputChange(e, index, true, true)}
                  placeholder={`Title for paragraph ${index + 1}`}
                  className="block w-full px-4 py-2 mb-2 bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                <textarea
                  value={para.text}
                  onChange={(e) => handleInputChange(e, index, true)}
                  placeholder={`Paragraph ${index + 1}`}
                  rows={4}
                  className="block w-full px-4 py-2 mb-2 bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>

                <ImageDropzone
                  index={index}
                  onDrop={handleDrop}
                  preview={imagePreviews[index]}
                />
              </div>
            ))}

            <div>
              <label htmlFor="quote" className="block text-sm font-medium ml-1">
                Quote
              </label>
              <textarea
                id="quote"
                name="quote"
                value={formData.quote}
                onChange={handleInputChange}
                rows={3}
                required
                className="block w-full px-4 py-2 bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="conclusion"
                className="block text-sm font-medium ml-1"
              >
                Conclusion
              </label>
              <textarea
                id="conclusion"
                name="conclusion"
                value={formData.conclusion}
                onChange={handleInputChange}
                rows={4}
                required
                className="block w-full px-4 py-2 bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-white text-black rounded-md hover:opacity-90"
              >
                {loading ? "Submitting..." : "Add Blog Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;
