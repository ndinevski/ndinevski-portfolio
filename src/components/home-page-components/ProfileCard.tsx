"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MediaContactTabs from "@/components/header/MediaContactTabs";
import { profileCardWords } from "@/lib/consts";

export default function ProfileCard() {
  const [currentWord, setCurrentWord] = useState(profileCardWords[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const updatedText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === currentWord) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setCurrentWord(
        profileCardWords[
          (profileCardWords.indexOf(currentWord) + 1) % profileCardWords.length
        ]
      );
      setDelta(250);
    }
  };

  return (
    <Card className="w-full mx-auto max-w-4xl bg-black text-white">
      <CardContent className="p-6 flex items-start">
        <div className="h-full mr-6">
          <div className="h-full flex items-center rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src="profileAvatar.png"
              alt="Profile Picture"
              className="w-40 h-40 max-lg:h-28 max-lg:w-28 max-sm:w-24 max-sm:h-24 object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-5xl max-sm:text-2xl font-bold mb-1">
                Nikola Dinevski
              </h2>
              <div className="max-sm:text-sm text-gray-400 mb-4 flex items-center justify-start gap-2">
                <MapPin />
                <p>Skopje, Macedonia</p>
              </div>
            </div>
            <MediaContactTabs classNameAttributes="max-md:flex-col" />
          </div>
          <p className="text-md max-sm:text-sm pb-2">
            I&apos;m a Full-Stack Software Engineer with expertise in Node.js,
            React and AWS. Dabbling in many more technologies.
          </p>
          <p className="text-md max-sm:text-sm pb-2">
            Born in Bitola. Based in Skopje.
          </p>
          <div className="text-white text-lg font-bold flex items-center">
            <span className="pr-2">I </span>
            <span className="inline-block min-w-[75px]">
              {text} <span className="animate-blink">|</span>{" "}
            </span>
            <span> stuff.</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
