import { getLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

async function MobileViewStore() {
  const locale = await getLocale();
  return (
    <>
      <div aria-hidden className="">
        <div
          aria-hidden
          className="relative p-4 transition-transform duration-200 group-hover:translate-y-0"
        >
          <div
            aria-hidden
            className="bg-linear-to-b from-transparent to-background absolute inset-0 z-10"
          />
          <Image
            src={
              locale === "en"
                ? "/mobile-en-filter-dark.png"
                : locale === "ar"
                ? "/mobile-ar-filter-dark.png"
                : "/mobile-ckb-filter-dark.png"
            }
            alt="mobileWallet"
            width={500}
            height={300}
            className="object-cover mx-auto scale-75 hidden dark:block"
          />
          <Image
            src={
              locale === "en"
                ? "/mobile-en-filter-light.png"
                : locale === "ar"
                ? "/mobile-ar-filter-light.png"
                : "/mobile-ckb-filter-light.png"
            }
            alt="mobileWallet"
            width={500}
            height={300}
            className="object-cover mx-auto scale-75 block dark:hidden"
          />
        </div>
      </div>
      <div aria-hidden className="relative">
        <div
          aria-hidden
          className=" p-4 transition-transform duration-200 group-hover:translate-y-0 "
        >
          <div
            aria-hidden
            className="bg-linear-to-b from-transparent to-background absolute inset-0 z-10"
          />
          <Image
            src={
              locale === "en"
                ? "/mobile-en-order-dark.png"
                : locale === "ar"
                ? "/mobile-ar-order-dark.png"
                : "/mobile-ckb-order-dark.png"
            }
            alt="mobileWallet"
            width={500}
            height={300}
            className="object-cover mx-auto scale-75 hidden dark:block"
          />
          <Image
            src={
              locale === "en"
                ? "/mobile-en-order-light.png"
                : locale === "ar"
                ? "/mobile-ar-order-light.png"
                : "/mobile-ckb-order-light.png"
            }
            alt="mobileWallet"
            width={500}
            height={300}
            className="object-cover mx-auto scale-75 block dark:hidden"
          />
        </div>
      </div>
    </>
  );
}

export default MobileViewStore;
