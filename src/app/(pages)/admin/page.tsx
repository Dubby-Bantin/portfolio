"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Admin = () => {
  const passKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;
  const router = useRouter();
  useEffect(() => {
    !passKey && router.push("/auth");
  }, [passKey, router]);
  return <div>Welcome the boss we greet u bros</div>;
};

export default Admin;
