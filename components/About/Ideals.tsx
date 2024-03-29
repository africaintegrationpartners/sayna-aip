import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import classes from "./style.module.css";

export type Ideal = {
  title: string;
  icon: string;
  body: string;
};

type Props = {
  ideals: Ideal[];
  type?: "light" | "dark";
};

const Ideals = (props: Props) => {
  const { ideals, type = "dark" } = props;

  const renderIdeals = ideals.map((ideal, i) => (
    <Col key={ideal.title} xs={12} md={4} lg={i == 2 ? 3 : 4}>
      <article className={`${classes[`${type}Ideal`]} px-3 mb-5 mb-md-0`}>
        <div className="d-flex gap-3 align-items-center mb-3">
          <Image src={ideal.icon} width="50" height="50" alt={ideal.title} />
          <h3 className="mb-0 h4 text-capitalize">{ideal.title}</h3>
        </div>
        <div>
          {ideal.body.split("<br>").map((val, idx) => (
            <p key={idx} className="mb-0">
              {val}
            </p>
          ))}
        </div>
      </article>
    </Col>
  ));

  return (
    <Row
      className={`${classes[`${type}Ideals`]} ${
        classes.ideals
      } justify-content-lg-between`}
    >
      {renderIdeals}
    </Row>
  );
};

export default Ideals;
