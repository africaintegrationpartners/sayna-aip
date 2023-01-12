import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { useSolutionsContext } from "../../contexts/solutions";
import { useTranslation } from "../../hooks";
import AnimateOnView from "../ui/AnimateOnView";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const solutionIcons = [
  "/images/study.svg",
  "/images/training.svg",
  "/images/finance.svg",
];

const sectorIcons = [
  "/images/tech.svg",
  "/images/energy.svg",
  "/images/agriculture.svg",
  "/images/transport.svg",
  "/images/real-estate.svg",
  "/images/industry.svg",
];

const Solution = () => {
  const t = useTranslation();

  const content = useSolutionsContext();
  const solutions = content?.solutions_services;

  const renderSolutions = solutions?.map((solution, idx) => (
    <AnimateOnView key={solution?.heading} amount={0.3}>
      <CardAndImage
        img={solutionIcons[idx % solutionIcons.length]}
        title={solution?.heading ?? ""}
        dir={idx % 2 === 0 ? "text-left" : "text-right"}
      >
        {solution?.content?.split(/\n+/).map((para: any, idx: any) => (
          <p key={idx} className="mb-0">
            {para}
          </p>
        ))}
      </CardAndImage>
    </AnimateOnView>
  ));

  const renderSectors = content?.solutions_sectors?.map((sector, idx) => (
    <Col key={sector} className="px-5 mb-5">
      <AnimateOnView>
        <Image src={sectorIcons[idx]} width="60" height="60" alt={""} />
        <p className="pt-2 lead">{sector}</p>
      </AnimateOnView>
    </Col>
  ));

  return (
    <Container className={classes.container}>
      <AnimateOnView>
        <PageSectionTitle
          title={content?.solutions_heading?.heading ?? ""}
          subtitle={content?.solutions_heading?.content ?? ""}
        />
      </AnimateOnView>
      <div className={classes.allSolutions + " d-flex flex-column"}>
        {renderSolutions}
      </div>
      <AnimateOnView>
        <PageSectionTitle title={t("solutions.sectors")} subtitle={""} />
      </AnimateOnView>
      <Row xs="1" md="2" lg="3" className={classes.sectors + " mb-5"}>
        {renderSectors}
      </Row>
    </Container>
  );
};

export default Solution;
