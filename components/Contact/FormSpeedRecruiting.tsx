import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "../../hooks";
import classes from "./style.module.css";

const FormSpeedRecruiting = () => {
  const t = useTranslation();

  return (
    <Form
      name="speed-recruiting"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      className={classes.form}
    >
      <input type="hidden" name="form-name" value="speed-recruiting" />

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>{t("contact.prompt_cv")}</Form.Label>
        <Form.Control name="cv" type="file" required accept="image/*, .pdf" />
        <Form.Text>{t("contact.info_file-upload")}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>{t("contact.prompt_cover-letter")}</Form.Label>
        <Form.Control name="lm" type="file" accept="image/*, .pdf" />
        <Form.Text>{t("contact.info_file-upload")}</Form.Text>
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        {t("cta.send")}
      </Button>
    </Form>
  );
};

export default FormSpeedRecruiting;
