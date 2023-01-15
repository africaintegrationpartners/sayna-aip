import dynamic from "next/dynamic";
import { Container, Row, Col } from "react-bootstrap";
import AnimateOnView from "../ui/AnimateOnView";
import ContactForm from "./ContactForm";
import classes from "./style.module.css";

const Map = dynamic(() => import("../Map"), { ssr: false });

const Contact = () => {
  return (
    <Container className={classes.container}>
      <AnimateOnView amount={0.2}>
        <Row>
          <Col xs="12" md="7" className="mb-5">
            <ContactForm />
          </Col>
          <Col xs="12" md="5">
            <div className={classes.map}>
              <Map />
            </div>
          </Col>
        </Row>
      </AnimateOnView>
    </Container>
  );
};

export default Contact;
