import NextLink from "next/link";

interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: any) => void;
}

const Link = (props: LinkProps) => {
  return (
    <span className={props.className}>
      <NextLink href={props.href ?? ""}>
        <span onClick={props.onClick}>{props.children}</span>
      </NextLink>
    </span>
  );
};

export default Link;
