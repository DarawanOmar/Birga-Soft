import { useParams, useRouter as useRouterNext } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale, useTranslations } from "next-intl";
import kurd from "@/public/kurd.svg";
import arabic from "@/public/arabic.svg";
import english from "@/public/english.svg";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

export const LangSelect = () => {
  const router = useRouter();
  const locale = useLocale();
  const routerNext = useRouterNext();
  const [_, startTransition] = React.useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: string) {
    const nextLocale = event as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale }
      );
      routerNext.refresh();
    });
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("outline-none rounded-lg")}
          size="icon"
        >
          <Languages />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-max bg-background/30 backdrop-blur-3xl "
      >
        {langSelect().map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => onSelectChange(item.value)}
            className="flex justify-between items-center hover:bg-primary/10 min-w-max"
          >
            {item.value === locale ? (
              <span className="text-green-500">✓</span>
            ) : (
              <div></div>
            )}
            <div className="flex items-center gap-2 self-start cursor-pointer ">
              <Image
                src={item.image}
                alt={item.label}
                className="size-4 rounded-full object-cover"
              />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const langSelect = () => {
  const t = useTranslations("intro");
  return [
    {
      value: "kr",
      label: t("Kurdish"),
      image: kurd,
    },
    {
      value: "ar",
      label: t("Arabic"),
      image: arabic,
    },
    {
      value: "en",
      label: t("English"),
      image: english,
    },
  ];
};
