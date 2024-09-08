import { Timestamp } from "firebase/firestore";

export interface BlogPost {
  title: string;
  category: string;
  introduction: string;
  paragraphs: { title: string; text: string; imageUrl: string }[];
  quote: string;
  conclusion: string;
  date: Timestamp;
  id: string;
}
