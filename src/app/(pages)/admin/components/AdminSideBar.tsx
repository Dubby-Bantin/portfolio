import Image from "next/image";
import AdminProfilePicture from "@/app/assets/images/logo.jpeg";
import Link from "next/link";
import { AdminNavigationLinks } from "@/app/lib/constants";
const AdminSidebar = () => {
  return (
    <div className="min-h-screen p-4 w-50 bg-[#050112] text-white border-r sticky top-0">
      <div className="flex justify-between items-center mb-4 border-b py-2">
        <div>
          <Image
            src={AdminProfilePicture}
            alt="Admin Profile Picture"
            height={40}
            width={40}
            className="rounded-full"
          />
        </div>
        <p className=" md:tracking-wider font-heading  font-bold bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
          Admin
        </p>
      </div>

      <div className="flex flex-col space-y-4 px-2 gap-5">
        {AdminNavigationLinks.map(({ text, path, Icon }, i) => (
          <Link href={path} key={i}>
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 transition-all duration-500 px-5 rounded-sm py-2">
              <Icon className="text-2xl" />
              <span>{text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
