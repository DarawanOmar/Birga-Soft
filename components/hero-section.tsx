import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import report_light from "@/public/report-screen2.png";
import report_dark from "@/public/report-screen.png";
import { getTranslations } from "next-intl/server";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default async function HeroSection() {
  const t = await getTranslations();

  return (
    <main className="overflow-hidden" id="hero-section">
      <section>
        <div className="relative pt-24 ">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <TextEffect
                preset="blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 max-sm:mt-16 text-balance text-4xl sm:text-5xl md:text-7xl lg:mt-16 xl:text-[5rem] font-bold rtl:!leading-normal "
              >
                {t("intro.hero.title")}
              </TextEffect>
              <TextEffect
                per="line"
                preset="blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-3xl text-sm sm:text-lg leading-normal"
              >
                {t("intro.hero.description")}
              </TextEffect>
              <AnimatedGroup
                //@ts-ignore

                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex  items-center justify-center gap-2 "
              >
                <div
                  key={1}
                  className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                >
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base"
                  >
                    {/* Whatsupp link with this number +965 751 281 33 27 */}
                    <Link href="https://wa.me/+9647512813327">
                      <span className="text-nowrap">
                        {t("intro.hero.contactUs")}
                      </span>
                    </Link>
                  </Button>
                </div>
                {/* <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                >
                  <Link
                    href="https://birgastoresystem.vercel.app/kr/sign-in"
                    target="_blank"
                  >
                    <span className="text-nowrap">
                      {t("intro.hero.viewSystem")}
                    </span>
                  </Link>
                </Button> */}
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            //@ts-ignore

            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative  mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <Image
                  className="bg-background  relative hidden rounded-2xl dark:block"
                  src={report_dark}
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
                <Image
                  className="z-2 border-border/25  relative rounded-2xl border dark:hidden"
                  src={report_light}
                  alt="app screen"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
}
