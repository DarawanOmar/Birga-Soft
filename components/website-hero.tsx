import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function WebsiteHero() {
  const t = await getTranslations("intro.website");
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">{t("title")}</h2>
          <p className="max-w-sm sm:ml-auto">{t("description")}</p>
        </div>
        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
          <div className="aspect-88/36 relative">
            <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
            <Image
              src="/store-dark.png"
              className="hidden dark:block"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <Image
              src="/store.png"
              className="dark:hidden"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <h3 className="text-sm font-medium">
                {t("features.feature1.title")}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("features.feature1.description")}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-primary" />
              <h3 className="text-sm font-medium">
                {t("features.feature2.title")}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("features.feature2.description")}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-primary" />
              <h3 className="text-sm font-medium">
                {t("features.feature3.title")}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("features.feature3.description")}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />

              <h3 className="text-sm font-medium">
                {t("features.feature4.title")}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("features.feature4.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
