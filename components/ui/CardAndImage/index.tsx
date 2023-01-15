import Image from "next/image";
import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./style.module.css";

type Props = {
  title: string;
  children?: ReactNode;
  img: string;
  dir?: "text-left" | "text-right";
};

const CardAndImage = (props: Props) => {
  const { title, children, img, dir } = props;

  return (
    <Row
      className={`
        ${classes.cardAndImage} 
        ${dir === "text-right" ? "flex-row" : "flex-row-reverse"}
        justify-content-around
      `}
    >
      <Col
        md={4}
        className={
          classes.cardAndImageImg + " d-none d-md-block position-relative px-5"
        }
      >
        <Image
          src={img}
          layout="fill"
          alt=""
          objectFit="contain"
          objectPosition="center"
        />
      </Col>
      <Col
        md={6}
        className="px-2 px-md-5 d-flex flex-column justify-content-center"
      >
        <h3>{title}</h3>
        <div>{children}</div>
      </Col>
    </Row>
  );
};

export default CardAndImage;
