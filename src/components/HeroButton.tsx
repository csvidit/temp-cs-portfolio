import Link from "next/link";
import { UrlObject } from "url";

const HeroButton = (props: {href: string | UrlObject; children: React.ReactNode}) => {
  return (
    <Link href={props.href} className="hover:opacity-70 transition-all">
      {props.children}
    </Link>
  );
};

export default HeroButton;