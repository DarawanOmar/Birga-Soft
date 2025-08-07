import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import googledrive from "@/public/icons-stack/google-drive.svg";
import zod from "@/public/icons-stack/zod.svg";
import neon from "@/public/icons-stack/neon.svg";
import nextjs from "@/public/icons-stack/nextjs.svg";
import postgresql from "@/public/icons-stack/postgresql.svg";
import prism from "@/public/icons-stack/prism.svg";
import reactquery from "@/public/icons-stack/react-query.svg";
import tailwindcss from "@/public/icons-stack/tailwindcss.svg";
import vercel from "@/public/icons-stack/vercel.svg";
import { getTranslations } from "next-intl/server";

export default async function LogoCloud() {
  const t = await getTranslations();

  return (
    <section
      className="bg-background overflow-hidden py-32"
      dir="ltr"
      id="technologies"
    >
      <div className="group relative m-auto max-w-7xl px-6 ">
        <div className="flex flex-col items-center md:flexrow">
          <p className="text-base sm:text-3xl font-semibold mb-5 text-foreground">
            {t("intro.technologies.title")}
          </p>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit dark:invert"
                  src={googledrive}
                  alt="Google Drive Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit "
                  src={zod}
                  alt="Zod Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit "
                  src={neon}
                  alt="Neon Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit dark:invert"
                  src={nextjs}
                  alt="Next.js Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit dark:invert"
                  src={postgresql}
                  alt="PostgreSQL Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit dark:invert"
                  src={prism}
                  alt="Prism Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit "
                  src={reactquery}
                  alt="React Query Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit "
                  src={tailwindcss}
                  alt="Tailwind CSS Logo"
                  height={20}
                  width={20}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-16 w-fit dark:invert"
                  src={vercel}
                  alt="Vercel Logo"
                  height={20}
                  width={20}
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
