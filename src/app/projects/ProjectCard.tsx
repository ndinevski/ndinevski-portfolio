"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  backgroundImage: string;
  title: string;
  technologies: string[];
  description: string;
  linkToProject: string;
}

export default function ProjectCard({
  backgroundImage,
  title,
  technologies,
  description,
  linkToProject,
}: ProjectCardProps) {
  return (
    <Card className="w-full mx-auto max-w-4xl min-h-[400px] overflow-hidden relative group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-75" />
      <div className="h-full w-full flex flex-col justify-end">
        <CardContent className="relative bottom-0 z-10 h-full flex flex-col justify-end p-6">
          <div className="max-w-[70%]">
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </CardContent>
        <div className="absolute bottom-0 right-0 p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
          <Button asChild variant="secondary" className="shadow-lg">
            <a href={linkToProject} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
