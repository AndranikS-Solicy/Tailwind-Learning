import React from "react";
import Link from "next/link";
import { headerItems } from "../../../utils/helpers/headerItems";

interface HeaderItem {
  url: string;
  pathName: string;
}

const HeaderItems: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 lg:mt-0 w-full">
      {headerItems.map((item: HeaderItem) => (
        <Link href={item.url} key={item.pathName} passHref>
          {item.pathName}
        </Link>
      ))}
    </div>
  );
};

export default HeaderItems;
