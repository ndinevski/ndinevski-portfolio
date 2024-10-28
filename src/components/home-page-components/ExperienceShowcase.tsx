import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { experiences } from "@/lib/consts";

export default function ExperienceShowcase() {
  return (
    <Card className="w-full mb-10 mx-auto max-w-4xl bg-black text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-6">
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-0.5 h-full bg-zinc-500"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                <h4 className="text-md font-light">{exp.role}</h4>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
