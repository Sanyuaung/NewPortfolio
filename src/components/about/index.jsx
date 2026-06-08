import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-12 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Mission Control{" "}
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in technology began with curiosity, self-learning, and a
            strong commitment to continuous improvement. As a Senior FullStack
            Software Engineer, I have developed and contributed to web
            applications, internal reporting systems, workflow automation
            solutions, and business process tools across modern full-stack and
            cloud-based environments. These experiences have strengthened my
            ability to analyze requirements, design scalable solutions, solve
            real-world problems, and deliver practical digital products. Today,
            I continue to grow by building applications that are reliable,
            user-friendly, and aligned with business needs.
          </p>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            6+{" "}
            <sub className="font-semibold text-base">
              Years of Working Experiences
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+{" "}
            <sub className="font-semibold text-base">
              Years of Banking IT Experiences
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">
              Freelance Project Experiences{" "}
            </sub>
          </p>
        </ItemLayout>
        {/* <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Sanyuaung&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="SanYuAung"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Sanyuaung&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="SanYuAung"
            loading="lazy"
          />
        </ItemLayout> */}

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=angular,ansible,aws,bootstrap,cloudflare,css,django,docker,dotnet,figma,git,github,gitlab,grafana,graphql,heroku,html,jenkins,jquery,js,laravel,linux,mongodb,mysql,nestjs,nextjs,nginx,nodejs,notion,npm,php,postgres,postman,powershell,prisma,react,sass,supabase,tailwind,ts,ubuntu,vercel,vite,vscode,vue,yarn`}
            alt="SanYuAung"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Sanyuaung&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="SanYuAung"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          {/* <Link
            href="https://github.com/Sanyuaung/blog"
            target="_blank"
            className="w-full"
          > */}
          <img
            alt="GitHub Snake"
            src="https://raw.githubusercontent.com/Sanyuaung/Sanyuaung/output/github-contribution-grid-snake.svg"
          />

          {/* </Link> */}
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
