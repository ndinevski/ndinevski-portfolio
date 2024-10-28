export default function About() {
  return (
    <div className="w-full mb-10 flex flex-col justify-start items-center">
      <main className="p-6 max-sm:p-0 mx-auto max-w-4xl bg-black text-white mt-32 max-sm:mt-14 w-2/3 max-sm:w-5/6 flex-grow flex-col">
        <div className="flex flex-col gap-2 mb-20">
          <p className="text-5xl max-sm:text-4xl font-bold">About Me</p>
          <p className="text-md max-sm:text-sm font-semibold text-zinc-400">
            Learn more about me
          </p>
        </div>
        <div className="flex flex-col gap-4 text-lg max-sm:text-sm text-justify">
          <p>
            Aspiring and ambitious software engineer with love for
            problem-solving and quick learning. An adventurer at heart, I thrive
            in team settings, bringing a happy spirit,positive attitude, and a
            wealth of experience. With a lifelong journey around
            computers,I&apos;ve explored and mastered numerous areas of computer
            science. I graduated from FCSE - Skopje with a GPA of 9.67 and
            currently on my Master&apos;s studies for Cloud Computing. Working
            as a Full-Stack Software Engineer with expertise in AWS (Certified
            Cloud Practicioner), Node.js with Typescript and React. My work
            extends to DevOps, server configurations and CI/CD pipelines.
          </p>
          <p>
            Skilled in Python for package development. Django for full-stack web
            applications, I am well-versed in building robust and scalable
            solutions. I&apos;ve ventured into game development with Unity,
            worked with Android and iOS applications, crafted Photoshop
            extensions with UXP, cyber security. Have participated in multiple
            Capture the Flag hacking competitions.
          </p>
          <p>
            Beyond web development, I&apos;ve dabbled in machine learning
            projects, TensorFlow Object Detection and AI integrations in
            projects. My technological adeptness spans mainstream tools and
            advanced computer skills, constantly fueled by a motivation to learn
            new technologies and frameworks. Currently, I&apos;m contributing as
            a Software Engineer at CodeChem, delivering impactful solutions.
          </p>
        </div>
      </main>
    </div>
  );
}
