// import Image from "next/image";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ContentContext } from "../../pages/contact";
import AnimateOnView from "../ui/AnimateOnView";
// import PageSectionTitle from "../ui/PageSectionTitle";
import ContactForm from "./ContactForm";
import classes from "./style.module.css";

const Contact = () => {
  const content: any = useContext(ContentContext);

  // const renderContacts = content.contact?.map((contact: any) => (
  //   <Col key={contact?.id} className={classes.country + " px-3 mb-5"}>
  //     <div className="border p-3 h-100 shadow-sm">
  //       <h3 className="mb-4">{contact?.country} </h3>
  //       <div className={"d-flex align-items-start gap-3"}>
  //         <span className={classes.img}>
  //           <Image src="/images/location.svg" layout="fill" alt="" />
  //         </span>
  //         <p className="mb-3">{contact?.address}</p>
  //       </div>

  //       {contact?.phone && (
  //         <div className={"d-flex align-items-start gap-3"}>
  //           <span className={classes.img}>
  //             <Image src="/images/phone.svg" layout="fill" alt="" />
  //           </span>
  //           <p className="mb-3">{contact?.phone}</p>
  //         </div>
  //       )}

  //       {contact?.email && (
  //         <div className={"d-flex align-items-start gap-3"}>
  //           <span className={classes.img}>
  //             <Image src="/images/email.svg" layout="fill" alt="" />
  //           </span>
  //           <p className="mb-3">{contact?.email}</p>
  //         </div>
  //       )}
  //     </div>
  //   </Col>
  // ));

  return (
    <Container className={classes.container}>
      {/* <AnimateOnView>
        <PageSectionTitle
          title={content?.page_section_heading_1?.title}
          subtitle={content?.page_section_heading_1?.subtitle}
        />
      </AnimateOnView> */}
      {/* <AnimateOnView amount={0.2}>
        <Row xs={1} md={2} className={classes.contactDetail + " mx-auto mb-5"}>
          {renderContacts}
        </Row>
      </AnimateOnView> */}
      <AnimateOnView amount={0.2}>
        <ContactForm />
      </AnimateOnView>
    </Container>
  );
};

export default Contact;
