import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { firestore } from "./auth";
import { BlogPost } from "@/types/types";

// Function to format the timestamp to the desired readable format
export function formatTimestampToReadableDate(timestamp: Timestamp): string {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
}

// Fetch a single blog post by ID (server-side use)
export async function fetchBlogById(id: string): Promise<BlogPost | null> {
  const docRef = doc(firestore, "blogPosts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as BlogPost;
  } else {
    return null; // Blog post not found
  }
}

// Fetch all blog posts (server-side use)
export async function fetchAllBlogs(): Promise<BlogPost[]> {
  const collectionRef = collection(firestore, "blogPosts");
  const querySnapshot = await getDocs(collectionRef);

  const blogs: BlogPost[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as BlogPost));

  return blogs;
}

// Function to fetch blog data in real-time (client-side use)
export function fetchBlogDataRealTime(
  callback: (data: BlogPost | null | BlogPost[]) => void,
  id?: string
): () => void {
  if (id) {
    // Real-time fetch of a single blog post by ID
    const docRef = doc(firestore, "blogPosts", id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        callback({ id: docSnap.id, ...docSnap.data() } as BlogPost);
      } else {
        callback(null); // Blog post not found
      }
    });

    // Return unsubscribe function to stop listening when no longer needed
    return unsubscribe;
  } else {
    // Real-time fetch of all blog posts
    const collectionRef = collection(firestore, "blogPosts");
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const blogs: BlogPost[] = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as BlogPost)
      );
      callback(blogs);
    });

    // Return unsubscribe function to stop listening when no longer needed
    return unsubscribe;
  }
}
