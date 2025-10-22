import Image from "next/image";
import bg from "../../../../public/background/contact.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl uppercase tracking-wide">
            initiate ufo contact
          </h1>
          <p className="text-center font-light text-sm xs:text-base max-w-2xl">
            Open a quantum channel and beam your transmission toward the
            orbiting station. Whether you’re proposing a mission, sharing cosmic
            insights, or requesting collaboration across sectors, your signal is
            routed through secure interstellar relays. Compose your message
            below and await a returning pulse from the fleet.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
