import { Project } from "@/lib/projects";
import Link from "./Link";

export default function Project({ link, description, name }: Project) {
  return (
    <div className="w-20.66667ch flex flex-col">
      <Link href={link}>{name}</Link>

      <span className="text-sm pt-3">{description}</span>
    </div>
  );
}
