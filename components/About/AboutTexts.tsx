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
          mb-4 mb-md-5 pb-md-5 text-center
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

export default AboutTexts;
