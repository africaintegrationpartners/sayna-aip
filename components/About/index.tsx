import { Container } from "react-bootstrap";
import { useAboutContext } from "../../contexts/about";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import AboutTexts from "./AboutTexts";
import Ideals, { Ideal } from "./Ideals";
import classes from "./style.module.css";
// import Teams from "./Teams";

const icons = [
  "/images/vision.svg",
  "/images/mission.svg",
  "/images/value.svg",
];

const About = () => {
  const content = useAboutContext();

  const ideals = content?.ideals?.map((item, idx) => {
    return {
      title: item?.heading,
      body: item?.content,
      icon: icons[idx],
    } as Ideal;
  });

  return (
    <Container className={classes.container + " px-4"}>
      <AnimateOnView>
        <PageSectionTitle
          title={content?.intro?.heading ?? ""}
          subtitle={content?.intro?.content ?? ""}
        />
      </AnimateOnView>

      <AnimateOnView amount={0.3}>
        <Ideals ideals={ideals ?? []} />
      </AnimateOnView>

      <AboutTexts />

      {/* <AnimateOnView>
        <PageSectionTitle
          title={content?.page_section_heading_2?.title}
          subtitle={content?.page_section_heading_2?.subtitle}
        />
      </AnimateOnView>

      <Teams /> */}
    </Container>
  );
};

export default About;
