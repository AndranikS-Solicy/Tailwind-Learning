export interface headerItemProps {
  url: string;
  pathName: string;
}

export const headerItems: headerItemProps[] = [
  { pathName: "Home", url: "/" },
  { pathName: "About", url: "/about" },
  { pathName: "Blog", url: "/blog" },
  { pathName: "Contact", url: "/contact" },
];
