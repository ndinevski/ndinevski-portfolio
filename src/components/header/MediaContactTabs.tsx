import { Mail } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

interface Props {
  classNameAttributes?: string;
}

export default function MediaContactTabs({ classNameAttributes }: Props) {
  return (
    <div
      className={`flex gap-2 max-lg:gap-0 justify-end items-center align-middle ${classNameAttributes}`}
    >
      <a
        href="mailto:ndinevski5@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-400 hover:bg-zinc-300"
        >
          <Mail className="h-5 w-5" />
        </Button>
      </a>
      <a
        href="https://github.com/ndinevski"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-400 hover:bg-zinc-300"
        >
          <GitHubLogoIcon className="h-5 w-5" />
        </Button>
      </a>
      <a
        href="https://linkedin.com/in/nikola-dinevski"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-400 hover:bg-zinc-300"
        >
          <LinkedInLogoIcon className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
}
