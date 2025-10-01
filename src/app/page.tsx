import Image from "next/image";
import { DefaultButton } from "./components/DefaultButton";

import { Avatar } from "@mui/material";
import { AvatarArea } from "./components/AvatarArea";
import Link from "next/link";
import { LinkCard } from "./components/LinkCard";

export default function Home() {
  return (
    <div className="bg-[url(/background.svg)] h-screen bg-center bg-cover flex flex-col justify-center items-center">
      <main className="bg-transparent mx-auto w-96 flex flex-col items-center">
        <AvatarArea />
        <section className="flex flex-col p-5bg-transparent mx-auto rounded-2xl shadow-xl border border-indigo-900/70 p-5 gap-4">
          <LinkCard href="https://www.linkedin.com/in/brunacborgesm/" title="Conecte-se ao meu LinkedIn" variant="linkedin" />
          <LinkCard href="/" title="Meu site pessoal" variant="website" />
          <LinkCard href="https://www.instagram.com/brunacarolinaa/" title="Siga-me no Instagram" variant="instagram" />
          <LinkCard href="https://www.instagram.com/bmtechlab/" title="Conheça minha empresa @bmtechlab" variant="instagram" />
        </section>

      </main>
      <footer className="flex text-slate-100 items-center justify-center pt-2">
        <span>Feito por <Link target="_blank" rel="noopener noreferrer" className="text-pink-600" href={"https://www.instagram.com/bmtechlab/"}>@BMTechLab</Link></span>
      </footer>
    </div>
  );
}
