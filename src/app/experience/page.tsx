import AchievementsShowcase from "@/components/home-page-components/AchievementsShowcase";
import EducationShowcase from "@/components/home-page-components/EducationShowcase";
import ExperienceShowcase from "@/components/home-page-components/ExperienceShowcase";

export default function Projects() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <main className="p-6 pb-0 max-sm:p-0 mx-auto max-w-4xl bg-black text-white mt-32 max-sm:mt-14 w-2/3 max-sm:w-5/6 flex-grow flex-col">
        <div className="flex flex-col gap-2 mb-20">
          <p className="text-5xl max-sm:text-4xl font-bold">Experience</p>

          <p className="text-md max-sm:text-sm font-semibold text-zinc-400">
            My work experience, education and achievements
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full flex-grow flex-col gap-8">
            <ExperienceShowcase />
            <EducationShowcase />
            <AchievementsShowcase />
          </div>
        </div>
      </main>
    </div>
  );
}
