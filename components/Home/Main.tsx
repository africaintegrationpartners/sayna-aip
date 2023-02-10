import { Col, Container, Row } from "react-bootstrap";
import classes from "./style.module.css";
import Button from "../ui/Button";
import CardAndImage from "../ui/CardAndImage";
import PageSectionTitle from "../ui/PageSectionTitle";
import Ideals, { Ideal } from "../About/Ideals";

import AnimateOnView from "../ui/AnimateOnView";
import { useTranslation } from "../../hooks";
import { useHomeContext } from "../../contexts/home";

const icons = [
  "/images/vision.svg",
  "/images/mission.svg",
  "/images/value.svg",
];

const cardAndImageIcons = [
  "/images/home-leadership.svg",
  "/images/home-present.svg",
];

const linksPart2 = [
  {
    href: "/solutions",
    cta: "find-out-more",
  },
  {
    href: "/contact",
    cta: "contact-us",
  },
];

const Main = () => {
  const t = useTranslation();
  const content = useHomeContext() ?? {};

  const ideals = content.part_3?.map((item, idx) => {
    return {
      title: item?.heading,
      body: item?.content,
      icon: icons[idx],
    } as Ideal;
  });

  return (
    <section className={classes.main + " px-2 px-md-5"}>
      <Container>
        <AnimateOnView amount={0.5}>
          <PageSectionTitle
            title={content?.part_1?.heading ?? ""}
            subtitle={content?.part_1?.content ?? ""}
          />
        </AnimateOnView>

        <div className={classes.propositions + " d-flex flex-column"}>
          {content?.part_2?.map((card, idx) => (
            <AnimateOnView amount={0.6} key={idx}>
              <CardAndImage
                title={card?.heading ?? ""}
                img={cardAndImageIcons[idx % cardAndImageIcons.length]}
                dir={idx % 2 === 0 ? "text-left" : "text-right"}
              >
                <p className="mb-4">{card?.content}</p>
                <Button
                  img="/images/arrow-right.svg"
                  href={linksPart2[idx].href}
                >
                  {t(`cta.${linksPart2[idx].cta}`)}
                </Button>
              </CardAndImage>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView amount={0.3}>
          <div className={`${classes.idealWrapper}`}>
            <Ideals ideals={ideals ?? []} />
          </div>
        </AnimateOnView>

        <AnimateOnView>
          <PageSectionTitle
            title={content?.part_4?.heading ?? ""}
            subtitle={content?.part_4?.content ?? ""}
          />
        </AnimateOnView>
        <AnimateOnView amount={0.3}>
          <Row xs={1} md={3} className="text-center mx-auto">
            {content?.part_4?.list?.map((addr) => (
              <Col className="p-3" key={addr}>
                <div className="border h-100 shadow-sm py-5 px-4">
                  <h3>{addr?.split("=")[0]}</h3>
                  <p className="m-0">{addr?.split("=")[1]}</p>
                </div>
              </Col>
            ))}
          </Row>
        </AnimateOnView>

        <div className=" my-5 pb-5 d-flex justify-content-center">
          <Button img="/images/arrow-right.svg" href="/contact">
            {t("cta.contact-us")}
          </Button>
        </div>

        {/* <Blogs
          title={content?.page_section_heading_3?.title}
          blogs={content?.blogs?.map((blog: any) => ({
            ...blog,
            createdAt: new Date(blog.createdAt),
          }))}
        /> */}
      </Container>
    </section>
  );
};

export default Main;
