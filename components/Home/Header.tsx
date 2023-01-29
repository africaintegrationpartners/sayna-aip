import classes from "./style.module.css";
import Button from "../ui/Button";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslation } from "../../hooks";
import { useHomeContext } from "../../contexts/home";

const Header = () => {
  const questionEltRef = useRef<HTMLSpanElement | null>(null);
  const content = useHomeContext() ?? {};

  const t = useTranslation();

  useEffect(() => {
    const headingElt = questionEltRef.current;
    if (!headingElt) return;

    const typed = new Typed(headingElt, {
      strings:
        content.home__header?.hero_questions?.map((val) => val ?? "") || [],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      backDelay: 3000,
      startDelay: 700,
    });

    return () => typed.destroy();
  }, [content.home__header?.hero_questions]);

  return (
    <header
      className={classes.header + " min-vh-100 d-flex align-items-center"}
    >
      <section className={classes.pageTitle}>
        <h1 className={`${classes.headerQuestions} mb-4`}>
          <span ref={questionEltRef}></span>
        </h1>

        <h2 className={`${classes.headerTitle} mb-4`}>
          {content?.home__header?.hero}
        </h2>

        <Button img="/images/arrow-right.svg" href="/solutions">
          {t("cta.our-services")}
        </Button>
      </section>
    </header>
  );
};

export default Header;
