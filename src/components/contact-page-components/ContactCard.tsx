import { DiscordLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactCard() {
  return (
    <Card className="w-full mx-auto max-w-4xl bg-black text-white">
      <CardHeader>
        <CardTitle className="text-5xl max-sm:text-4xl font-bold">
          Contact me
        </CardTitle>
        <CardDescription className="text-md max-sm:text-sm font-semibold text-zinc-400">
          You can contact me via Email, Discord or LinkedIn
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110 hover:text-zinc-400">
          <a
            href="mailto:ndinevski5@gmail.com"
            className="flex flex-col items-center"
          >
            <Mail className="h-12 w-12 mb-2 max-sm:h-7 max-sm:w-7" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-zinc-400 max-sm:text-[11px]">
              ndinevski5@gmail.com
            </p>
          </a>
        </div>
        <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110 hover:text-zinc-400">
          <DiscordLogoIcon className="h-12 w-12 mb-2 max-sm:h-7 max-sm:w-7" />
          <h3 className="font-semibold">Discord</h3>
          <p className="text-sm text-zinc-400 max-sm:text-[11px]">ndinevski</p>
        </div>
        <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-110 hover:text-zinc-400">
          <a
            href="https://linkedin.com/in/nikola-dinevski"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <LinkedInLogoIcon className="h-12 w-12 mb-2 max-sm:h-7 max-sm:w-7" />
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-sm text-zinc-400 max-sm:text-[11px]">
              Nikola Dinevski
            </p>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
