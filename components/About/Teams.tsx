import Image from "next/image";
import { Fragment, useContext } from "react";
import { Col, Card, Row } from "react-bootstrap";
// import { ContentContext } from "../../pages/about";
import AnimateOnView from "../ui/AnimateOnView";
import classes from "./style.module.css";

const Teams = () => {
  // const content: any = useContext(ContentContext);

  // const renderTeams = content?.team?.map((team: any) => (
  //   <Col className="mb-4" key={team.id}>
  //     <AnimateOnView amount={0.4}>
  //       <Card
  //         className={`${classes.teamCard} rounded-0 border-0 bg-light text-white`}
  //         style={{ height: "400px" }}
  //       >
  //         <Image
  //           src={team.image?.data?.attributes?.url}
  //           alt={`Image of ${team.name}`}
  //           layout="fill"
  //           className="card-img rounded-0"
  //         />
  //         <Card.ImgOverlay className={classes.teamOverlay + " py-4 rounded-0"}>
  //           <Card.Title className={classes.teamName + " mb-3"}>
  //             {team.name}
  //           </Card.Title>
  //           <Card.Text>
  //             {team?.description
  //               ?.replaceAll(/\n+/g, "\n")
  //               ?.split("\n")
  //               .map((para: any, idx: any) => (
  //                 <Fragment key={idx}>
  //                   {para} <br /> <br />
  //                 </Fragment>
  //               ))}
  //           </Card.Text>
  //         </Card.ImgOverlay>
  //       </Card>
  //     </AnimateOnView>
  //   </Col>
  // ));

  return (
    <Row xs={1} md={2} lg={3} className={classes.team}>
      {/* {renderTeams} */}
    </Row>
  );
};

export default Teams;
