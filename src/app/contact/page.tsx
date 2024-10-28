import ContactCard from "@/components/contact-page-components/ContactCard";

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-start items-center mb-10">
      <main className="mt-32 max-sm:mt-14 w-2/3 max-sm:w-5/6 flex-grow flex-col gap-8">
        <ContactCard />
      </main>
    </div>
  );
}
