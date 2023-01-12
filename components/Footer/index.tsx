import { Col, Container, Row } from "react-bootstrap";
import Link from "../ui/Link";
import Image from "next/image";
import classes from "./style.module.css";
import { useTranslation } from "../../hooks";
import { useMemo } from "react";

const socials = [
  {
    icon: "/images/facebook.svg",
    alt: "facebook icon",
    href: "https://facebook.com",
  },
  {
    icon: "/images/linkedin.svg",
    alt: "linkedin icon",
    href: "https://linkedin.com",
  },
  {
    icon: "/images/twitter.svg",
    alt: "twitter icon",
    href: "https://twitter.com",
  },
  {
    icon: "/images/whatsapp.svg",
    alt: "whatsapp icon",
    href: "https://whatsapp.com",
  },
];

const Footer = () => {
  const t = useTranslation();

  const links = useMemo(
    () => [
      { text: t("link.home"), href: "/" },
      { text: t("link.about"), href: "/about" },
      { text: t("link.solutions"), href: "/solutions" },
      { text: t("link.programs"), href: "/programs" },
      { text: t("link.stories"), href: "/stories" },
      { text: t("link.contact"), href: "/contact" },
    ],
    [t]
  );

  const renderSocials = socials.map((social) => (
    <a
      key={social.href}
      className="mx-2"
      href={social.href}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={social.icon} alt={social.alt} width={20} height={20} />
    </a>
  ));

  const renderLinks = links.map((link) => (
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
