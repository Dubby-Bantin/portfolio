import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

interface ProjectCardProps {
  id :number;
  title: string;
  desc: string;
  img: StaticImageData;
  iconLists: StaticImageData[];
  live_url: string;
  git_link: string;
}
const ProjectCard = ({
  id,
  title,
  desc,
  img,
  iconLists,
  live_url,
  git_link,
}: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#0C0E23]  rounded-lg p-6 text-white shadow-lg max-w-[26rem] mx-auto max-h-max">
      <div className="bg-gradient-to-r from-[#0C0E23] rounded-lg overflow-clip">
        <Image
          src={img}
          alt={title}
          className="w-full cursor-pointer object-cover"
          width={400}
          height={400}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold font-heading text-transparent  bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300 font-text">{desc}</p>
      </div>
      <div className="mt-4 flex items-center">
        {iconLists.map((icon, idx) => (
          <Image
            key={idx}
            src={icon}
            alt="Tech Stack 1"
            width={32}
            height={32}
            className="p-2 rounded-full bg-gradient-to-r from-[#0C0E23] to-[#050112] -mr-2"
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 ">
        <div className="flex items-center gap-2">
          <Link
            href={git_link}
            className="text-right text-transparent font-heading font-bold bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60"
          >
            Source code
          </Link>
          <FaCode className="text-blue-500 text-sm" />
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={live_url}
            className="text-right text-transparent font-heading font-bold bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60"
          >
            Check Live Site
          </Link>
          <FaArrowTrendUp className="text-blue-500 text-sm" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
