import { Col, Container, Row } from "react-bootstrap";
import Link from "../ui/Link";
import Image from "next/image";
import classes from "./style.module.css";
import { useTranslation } from "../../hooks";
import { useMemo } from "react";
import { useSocialLinksContext } from "../../contexts/socialLinks";

const isStoriesPageDisabled =
  process.env.NEXT_PUBLIC_ENABLE_STORIES === "false";

type Social = {
  href: string;
  icon: string;
  alt: string;
};

const buildSocialDataFrom = (name: string, href: string): Social => {
  return {
    icon: `/images/${name.toLowerCase()}.svg`,
    alt: `${name} icon`,
    href: href,
  };
};

const buildSocialElementFrom = (social: Social) => (
  <a
    key={social.href}
    className="mx-2"
    href={social.href}
    target="_blank"
    rel="noreferrer"
  >
    <Image src={social.icon} alt={social.alt} width={20} height={20} />
  </a>
);

const Footer = () => {
  const t = useTranslation();
  const socialLinks = useSocialLinksContext().socials;
  const renderSocials = useMemo(
    () =>
      Object.entries(socialLinks ?? {})
        .filter(([key]) => !key.startsWith("_")) // remove metadata
        .map(([name, href]) => buildSocialDataFrom(name, href ?? ""))
        .map((social) => buildSocialElementFrom(social)),
    [socialLinks]
  );

  const links = useMemo(
    () => [
      { text: t("link.home"), href: "/" },
      { text: t("link.about"), href: "/about" },
      { text: t("link.solutions"), href: "/solutions" },
      { text: t("link.programs"), href: "/programs" },
      {
        text: t("link.stories"),
        href: "/stories",
        isDisabled: isStoriesPageDisabled,
      },
      { text: t("link.contact"), href: "/contact" },
    ],
    [t]
  );

  const renderLinks = links
    .filter((link) => !link.isDisabled)
    .map((link) => (
      <Col key={link.href}>
        <Link href={link.href} className={classes.link}>
          {link.text}
        </Link>
      </Col>
    ));

  return (
    <footer className={classes.footer + " py-5 text-white"}>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row">
          <div>
            <h5 className="mb-4">{t("footer.heading_link")}</h5>
            <Row xs={2}>{renderLinks}</Row>
          </div>
          <div className="pt-4 px-4">
            <div className={classes.socials + " d-flex justify-content-center"}>
              {renderSocials}
            </div>
          </div>
        </div>
        <div className={classes.legal + " text-center pt-5"}>
          <span>
            &copy; Copyright {new Date().getFullYear()} Africa Integration
            Partners
          </span>
          {" | "}
          <Link className="text-decoration-underline">
            {t("link.legal-notice")}
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
