import React from "react";
import Link from "next/link";
import { headerItems } from "../../../utils/helpers/headerItems";

interface HeaderItem {
  url: string;
  pathName: string;
}

const HeaderItems: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-20">
      {headerItems.map((item: HeaderItem) => (
        <Link href={item.url} key={item.pathName} passHref>
          {item.pathName}
        </Link>
      ))}
    </div>
  );
};

export default HeaderItems;
