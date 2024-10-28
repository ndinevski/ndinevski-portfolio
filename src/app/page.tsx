import AchievementsShowcase from "@/components/home-page-components/AchievementsShowcase";
import EducationShowcase from "@/components/home-page-components/EducationShowcase";
import ExperienceShowcase from "@/components/home-page-components/ExperienceShowcase";
import ProfileCard from "@/components/home-page-components/ProfileCard";
import TechnologyShowcase from "@/components/home-page-components/TechnologyShowcase";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <main className="mt-32 max-sm:mt-14 w-2/3 max-sm:w-5/6 flex-grow flex-col gap-8">
        <ProfileCard />
        <TechnologyShowcase />
        <ExperienceShowcase />
        <EducationShowcase />
        <AchievementsShowcase />
      </main>
    </div>
  );
}
