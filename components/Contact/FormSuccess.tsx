import { Card } from "react-bootstrap";
import { useTranslation } from "../../hooks";
import Link from "../ui/Link";
import classes from "./style.module.css";

const FormSuccess = () => {
  const t = useTranslation();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
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
