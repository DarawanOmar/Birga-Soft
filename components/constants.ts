// constants/menu.ts
export const getMenuItems = (t: any) => [
  { name: t("intro.menu.features"), href: "#features" },
  { name: t("intro.menu.technologies"), href: "#technologies" },
  // { name: t("intro.menu.video"), href: "#video" },
  { name: t("intro.menu.about"), href: "#footer" },
];

// For backward compatibility, keep the original static export
export const menuItems = [
  { name: "تایبەتمەندیەکان", href: "#features" },
  { name: "تەکنەلۆژیا بەکارهاتووەکان", href: "#technologies" },
  { name: "دەربارە", href: "#footer" },
];
