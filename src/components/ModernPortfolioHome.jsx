"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import bg from "../../public/background/home.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import ClassicPortfolioSwitcher from "@/components/ClassicPortfolioSwitcher";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function ModernPortfolioHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center "
      />

      <div className="w-full h-screen">
        <ClassicPortfolioSwitcher />
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
