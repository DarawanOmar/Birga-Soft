import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
// change
export default async function Features() {
  const t = await getTranslations("intro.features.more-features");
  return (
    <section className="relative w-full">
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl space-y-2 px-6 text-center">
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
            {/* Buy */}
            <div>
              <h3 className=" text-xl font-semibold text-primary">
                {t("one.title")}
              </h3>
              <p className="text-muted-foreground my-4 text-sm">
                {t("one.description")}
              </p>
              <div aria-hidden className="relative">
                <Card
                  aria-hidden
                  className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0"
                >
                  <div
                    aria-hidden
                    className="bg-linear-to-b from-transparent to-background absolute inset-0 z-10"
                  />
                  <Image
                    src="/sale-ckb-dark.png"
                    alt="mobileWallet"
                    width={500}
                    height={300}
                    className="object-cover hidden dark:block"
                  />
                  <Image
                    src="/sale-ckb-light.png"
                    alt="mobileWallet"
                    width={500}
                    height={300}
                    className="object-cover block dark:hidden"
                  />
                </Card>
              </div>
            </div>
            {/* Invoice */}
            <div>
              <h3 className="text-primary text-xl font-semibold">
                {t("two.title")}
              </h3>
              <p className="text-muted-foreground my-4 text-sm">
                {t("two.description")}
              </p>
              <Card
                aria-hidden
                className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0"
              >
                <div
                  aria-hidden
                  className="bg-linear-to-b from-transparent to-background absolute inset-0 z-10"
                />
                <Image
                  src="/invoice-ckb-dark.png"
                  alt="mobileWallet"
                  width={500}
                  height={300}
                  className="object-cover hidden dark:block"
                />
                <Image
                  src="/invoice-ckb-light.png"
                  alt="mobileWallet"
                  width={500}
                  height={300}
                  className="object-cover block dark:hidden"
                />
              </Card>
            </div>
          </div>

          <div className="border-foreground/10 relative mt-16 grid gap-12 border-b pb-12 [--radius:1rem] md:grid-cols-2">
            {/* Role-User */}
            <div>
              <h3 className="text-primary text-xl font-semibold">
                {t("three.title")}
              </h3>
              <p className="text-muted-foreground my-4 text-sm">
                {t("three.description")}
              </p>
              <div aria-hidden className="relative">
                <Card
                  aria-hidden
                  className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0"
                >
                  <div
                    aria-hidden
                    className="bg-linear-to-b from-transparent to-background absolute inset-0 z-10"
                  />
                  <Image
                    src="/role-ckb-dark.png"
                    alt="mobileWallet"
                    width={500}
                    height={300}
                    className="object-cover hidden dark:block"
                  />
                  <Image
                    src="/role-ckb-light.png"
                    alt="mobileWallet"
                    width={500}
                    height={300}
                    className="object-cover block dark:hidden"
                  />
                </Card>
              </div>
            </div>
            {/* product */}
            <div>
              <h3 className="text-primary text-xl font-semibold">
                {t("four.title")}
              </h3>
              <p className="text-muted-foreground my-4 text-sm">
                {t("four.description")}
              </p>
              <Card
                aria-hidden
                className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0"
              >
                <div
                  aria-hidden
                  className="bg-linear-to-b from-transparent to-background absolute inset-0 z-10"
                />
                <Image
                  src="/product-ckb-dark.png"
                  alt="mobileWallet"
                  width={500}
                  height={300}
                  className="object-cover hidden dark:block"
                />
                <Image
                  src="/product-ckb-light.png"
                  alt="mobileWallet"
                  width={500}
                  height={300}
                  className="object-cover block dark:hidden"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
