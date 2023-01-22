import { Card } from "react-bootstrap";
import { useTranslation } from "../../hooks";
import Link from "../ui/Link";
import classes from "./style.module.css";

const FormSuccess = () => {
  const t = useTranslation();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {/* A little help for the Netlify bots if you're not using a SSG  */}
      <form
        name="Contact Us"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="Name" />
        <input type="text" name="First name" />
        <input type="tel" name="Telephone" />
        <input type="email" name="Email" />
        <input type="text" name="Company" />
        <select name="Profile"></select>
        <select name="Topic"></select>
        <select name="How did you hear"></select>
        <textarea name="Message"></textarea>
        <input type="file" name="Attachment" />
      </form>
      <Card style={{ width: "20rem" }} className="p-4 shadow">
        <Card.Body>
          <Card.Title className={`${classes.formSuccessHeader}`}>
            {t("contact.thank")}
          </Card.Title>
          <Card.Text>{t("contact.information-received")}</Card.Text>
          <span style={{ cursor: "pointer" }}>
            <Link
              href="/"
              className="text-decoration-underline text-primary text-capitalize"
            >
              {t("link.home")}
            </Link>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormSuccess;
