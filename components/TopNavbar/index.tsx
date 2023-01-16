import Link from "../ui/Link";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import classes from "./style.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "../../hooks";
import { useCallback, useMemo, useRef } from "react";

const setCookie = (locale: string) => {
  document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
};

const isStoriesPageDisabled =
  process.env.NEXT_PUBLIC_ENABLE_STORIES === "false";

const TopNavbar = () => {
  const router = useRouter();
  const t = useTranslation();

  const togglerRef = useRef<HTMLButtonElement | null>(null);
  const onLinkClick = useCallback(() => {
    const matchLarge = window.matchMedia("(min-width: 992px)").matches;
    if (!matchLarge) togglerRef?.current?.click();
  }, []);

  const links = useMemo(
    () => [
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
      <Link
        onClick={onLinkClick}
        className={`${classes.link} 
      ${router.pathname === link.href ? classes.linkActive : ""}
    `}
        key={link.text}
        href={link.href}
      >
        {link.text}
      </Link>
    ));

  const handleChangeLanguage = (e: any) => {
    const locale = e.target.value;
    setCookie(locale);
    router.push(router.asPath, undefined, { locale });
  };

  return (
    <Navbar bg="white" expand="lg" className="p-0 fixed-top w-100 shadow">
      <Container className="py-4">
        <Link href="/" className={classes.logo + " navbar-brand p-0"}>
          <Image
            src="/images/logo-couleur.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </Link>
        <Navbar.Toggle ref={togglerRef} />
        <Navbar.Collapse className="align-items-center py-4 py-lg-0">
          <Nav className="ms-auto gap-4 align-items-center">
            {renderLinks}
            <Form.Select
              aria-label="Change language"
              defaultValue={router.locale}
              onChange={handleChangeLanguage}
              className={classes.options}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </Form.Select>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
