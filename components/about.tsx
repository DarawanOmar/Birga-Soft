import React from "react";
import { getTranslations } from "next-intl/server";

async function AboutMe() {
  const t = await getTranslations();

  return (
    <div className="my-32 max-w-4xl mx-auto text-center relative z-10">
      <h3 className="text-xl font-semibold text-primary">
        {t("intro.about.title")}
      </h3>
      <div className="space-y-4 text-muted-foreground dark:text-white leading-relaxed">
        <div className="mt-6 pt-6 border-t border-border/50 p-2">
          <p className="text-sm md:text-base" dir="rtl" lang="ku">
            {t("intro.about.description1")}
          </p>
          <p className="text-sm md:text-base mt-1" dir="rtl" lang="ku">
            {t("intro.about.description2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
