export default function Footer() {
  return (
    <footer className="w-2/3 h-[100px] mx-auto text-center text-white text-md">
      <hr className="mb-6" />
      <div className="flex justify-between  ">
        <div className="mb-4 max-sm:text-xs">© Nikola Dinevski, 2024</div>
        <div className="flex gap-6 max-sm:gap-1 max-sm:text-xs justify-center mb-6 underline">
          <a
            href="mailto:ndinevski5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400"
          >
            Mail
          </a>
          <a
            href="https://github.com/ndinevski"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nikola-dinevski"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
