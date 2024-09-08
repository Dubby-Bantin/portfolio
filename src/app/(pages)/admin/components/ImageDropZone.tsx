// components/ImageDropzone.tsx

"use client";

import { useDropzone } from "react-dropzone";
import Image from "next/image";
import uploadIcon from "@/app/assets/icons/upload.svg";

interface ImageDropzoneProps {
  index: number;
  onDrop: (files: File[], index: number) => void;
  preview: string;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  index,
  onDrop,
  preview,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, index),
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="mt-2 mb-10 p-4 border border-dashed border-gray-500 focus:border-blue-500 hover:border-blue-500 rounded-md text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {preview ? (
        <Image
          src={preview}
          alt={`Paragraph ${index + 1} image`}
          className="w-full h-32 object-cover mt-2 rounded-md"
          width={600} // Desired width
          height={400} // Desired height
          quality={100} // Set the quality to 100 to ensure it’s not compressed too much
        />
      ) : (
        <div className="text-center flex flex-col items-center">
          <div className="mb-2">
            <Image src={uploadIcon} alt="Upload" width={30} height={30} />
          </div>
          <p className="md:tracking-wider mb-4 font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG, or GIF (max. 800x400px)
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
