// import { useState } from "react";
// import { Col, Nav, Row, Tab } from "react-bootstrap";
import { useAboutContext } from "../../contexts/about";
import AnimateOnView from "../ui/AnimateOnView";
import classes from "./style.module.css";

const AboutTexts = () => {
  const content = useAboutContext();

  const renderAboutText = content?.services?.map((srv, idx) => (
    <AnimateOnView key={idx}>
      <section
        className={`
          ${classes.offerWrapper}
          ${idx % 2 ? "flex-md-row-reverse" : "flex-md-row"}
          d-flex flex-column justify-content-center align-items-center align-items-md-start
          mb-4 pb-md-3 text-center
        `}
      >
        <h3 className="py-2 w-100">{srv?.heading}</h3>
        <p className={`w-100 ${idx % 2 ? "text-md-end" : "text-md-start"}`}>
          {srv?.content}
        </p>
      </section>
    </AnimateOnView>
  ));

  return <>{renderAboutText}</>;
};

// const AboutTexts = () => {
//   const content = useAboutContext();
//   const [tabKey, setTabKey] = useState("0");

//   const onSelect = (key: string | null) => {
//     setTabKey(() => key ?? "");
//   };

//   const getOnMouseEnterHandler = (key: number) => {
//     return () => setTabKey(key + "");
//   };

//   const headers = content?.services?.map((srv, idx) => (
//     <Nav.Item key={idx} onMouseEnter={getOnMouseEnterHandler(idx)}>
//       <Nav.Link eventKey={idx} className={`${classes.navLink}`}>
//         {srv?.heading}
//       </Nav.Link>
//     </Nav.Item>
//   ));

//   const details = content?.services?.map((srv, idx) => (
//     <Tab.Pane eventKey={idx} key={idx} className="mx-3 mt-4 mt-md-0">
//       {srv?.content}
//     </Tab.Pane>
//   ));

//   return (
//     <Tab.Container defaultActiveKey="0" onSelect={onSelect} activeKey={tabKey}>
//       <Row className={`${classes.tabs} justify-content-center`}>
//         <Col md={5} xl={4}>
//           <Nav variant="pills" className={`${classes.navPill} flex-column`}>
//             {headers}
//           </Nav>
//         </Col>
//         <Col md={7} xl={6}>
//           <Tab.Content>{details}</Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
//   );
// };
export default AboutTexts;
