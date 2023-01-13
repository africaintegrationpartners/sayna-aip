import { MouseEventHandler, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useProgramsContext } from "../../contexts/programs";
import AnimateOnView from "../ui/AnimateOnView";
import PageSectionTitle from "../ui/PageSectionTitle";
import classes from "./style.module.css";

const Programs = () => {
  const content = useProgramsContext();
  const programsRef = useRef<HTMLDivElement | null>(null);

  const onMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
    if (!programsRef.current) return;

    const target = e.currentTarget as HTMLElement;
    console.log({ target });
    programsRef.current
      .querySelectorAll<HTMLElement>(`.${classes.programGroupItem}`)
      .forEach((elt) => elt !== target && elt.classList.add(classes.hidden));
  };

  const onMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
    if (!programsRef.current) return;

    const target = e.currentTarget as HTMLElement;
    console.log({ target });
    programsRef.current
      .querySelectorAll<HTMLElement>(`.${classes.programGroupItem}`)
      .forEach((elt) => elt.classList.remove(classes.hidden));
  };

  const renderPrograms = content?.programs?.map((prg) => (
    <Col key={prg?.group_name} className={`${classes.program} px-2`}>
      <div
        className={`${classes.programCard} px-3 py-4 text-center mb-3 h-100 rounded`}
      >
        <h5 className="mb-4">{prg?.group_name}</h5>
        <Row xs="1">
          {prg?.groups?.map((group) => (
            <Col
              key={group?.heading}
              className="w-100 px-3 text-center mb-3 flex-no-wrap"
            >
              <Card
                className={`${classes.programGroupItem} py-3 rounded-0`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Card.Body>
                  <Card.Title className={classes.cardTitle}>
                    {group?.heading}
                  </Card.Title>
                  <div className={`${classes.programDetail}`}>
                    {group?.content}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  ));

  return (
    <Container className={classes.container}>
      <AnimateOnView>
        <PageSectionTitle
          title={content?.programs_heading ?? ""}
          subtitle={""}
        />
      </AnimateOnView>
      <Row xs={1} md={2} lg={3} className="mb-5 pb-5" ref={programsRef}>
        {renderPrograms}
      </Row>
    </Container>
  );
};

export default Programs;
