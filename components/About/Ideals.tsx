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
};

const Ideals = (props: Props) => {
  const { ideals } = props;

  const renderIdeals = ideals.map((ideal) => (
    <Col key={ideal.title}>
      <article className="text-white px-3 mb-5 mb-md-0">
        <div className="d-flex gap-3 align-items-center mb-3">
          <Image src={ideal.icon} width="50" height="50" alt={ideal.title} />
          <h3 className="mb-0 h4 text-capitalize">{ideal.title}</h3>
        </div>
        <p>{ideal.body}</p>
      </article>
    </Col>
  ));

  return (
    <Row xs={1} md={3} className={`${classes.ideals} py-5`}>
      {renderIdeals}
    </Row>
  );
};

export default Ideals;
