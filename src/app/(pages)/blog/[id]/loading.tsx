import { ImSpinner2 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
    </div>
  );
}
