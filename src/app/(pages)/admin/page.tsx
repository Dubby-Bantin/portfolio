"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Admin = () => {
  const passKey = localStorage.getItem("accessKey");
  const router = useRouter();
  useEffect(() => {
    !passKey && router.push("/auth");
  }, [passKey, router]);
  return <div>Welcome the boss we greet u bros</div>;
};

export default Admin;
