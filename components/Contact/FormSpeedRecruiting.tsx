import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "../../hooks";
import classes from "./style.module.css";

const FormSpeedRecruiting = () => {
  const t = useTranslation();

  return (
    <Form
      name="Employees & Consultants"
      encType="multipart/form-data"
      className={classes.form}
      method="POST"
      action="/confirmation.html"
    >
      <input type="hidden" name="form-name" value="Employees & Consultants" />

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>{t("contact.prompt_cv")}</Form.Label>
        <Form.Control name="CV" type="file" required accept="image/*, .pdf" />
        <Form.Text>{t("contact.info_file-upload")}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>{t("contact.prompt_cover-letter")}</Form.Label>
        <Form.Control name="Cover letter" type="file" accept="image/*, .pdf" />
        <Form.Text>{t("contact.info_file-upload")}</Form.Text>
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        {t("cta.send")}
      </Button>
    </Form>
  );
};

export default FormSpeedRecruiting;
