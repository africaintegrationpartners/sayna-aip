import { useState } from "react";
import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "../../hooks";
import classes from "./style.module.css";

const FormContact = () => {
  const t = useTranslation();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      name="query"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={classes.form}
    >
      <input type="hidden" name="form-name" value="query" />

      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="name" style={{ width: "48%" }}>
          <Form.Label>{t("contact.prompt_name")}</Form.Label>
          <Form.Control
            name="nom"
            type="text"
            placeholder={t("contact.placeholder_name")}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t("contact.error_name")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="prénoms"
          style={{ width: "48%" }}
        >
          <Form.Label>{t("contact.prompt_first-name")} </Form.Label>
          <Form.Control
            name="prénom"
            type="text"
            placeholder={t("contact.placeholder_first-name")}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t("contact.error_first-name")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>{t("contact.prompt_phone")}</Form.Label>
          <Form.Control
            name="tel"
            type="tel"
            placeholder={t("contact.placeholder_phone")}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t("contact.error_phone")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{ width: "48%" }} className="mb-3" controlId="email">
          <Form.Label>{t("contact.prompt_email")}</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder={t("contact.placeholder_email")}
            required
          />
          <Form.Control.Feedback type="invalid">
            {t("contact.error_email")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" style={{ width: "48%" }}>
          <Form.Label>{t("contact.prompt_company")}</Form.Label>
          <Form.Control
            required
            name="société"
            type="text"
            placeholder={t("contact.placeholder_company")}
          />
          <Form.Control.Feedback type="invalid">
            {t("contact.error_company")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: "48%" }}>
          <Form.Label>{t("contact.prompt_profile")}</Form.Label>
          <Form.Select required name="fonction">
            <option></option>
            <option value="bailleur">Bailleur de fonds</option>
            <option value="fonctionnaire">Représentant de l'Etat</option>
            <option value="dirigeant-societe">Dirigeant de société</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="cadre">Cadre</option>
            <option value="jeune-diplome">Jeune diplômé</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_profile")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>{t("contact.prompt_topic")}</Form.Label>
          <Form.Select required name="sujet">
            <option></option>
            <option value=" Jeunes diplômés"> Programmes PME</option>
            <option value=" Jeunes diplômés">
              Programmes Jeunes entrepreneurs
            </option>
            <option value="Cadres">Programmes Femmes</option>
            <option value="Cadres">Programmes Insertion Professionnelle</option>
            <option value="Autres à préciser">Formation</option>
            <option value="Autres à préciser">Etude</option>
            <option value="Autres à préciser">Conseil</option>
            <option value="Autres à préciser">Accompagnement technique</option>
            <option value="Autres à préciser">Autre Raison</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_topic")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>{t("contact.prompt_country")}</Form.Label>
          <Form.Select required name="pays">
            <option></option>
            <option value="Togo"> Togo</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Benin">Benin</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_country")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Form.Group className="mb-3">
        <Form.Label>{t("contact.prompt_how-did-you-hear")}</Form.Label>
        <Form.Select required name="comment-trouver">
          <option></option>
          <option value="sms">SMS</option>
          <option value="email">E-mailing</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {t("contact.error_how-did-you-hear")}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>{t("contact.prompt_message")}</Form.Label>
        <Form.Control
          name="message"
          type="text"
          placeholder={t("contact.placeholder_message")}
          as="textarea"
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>{t("contact.prompt_attachment")}</Form.Label>
        <Form.Control name="pj" type="file" accept="image/*, .pdf" />
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        {t("cta.send")}
      </Button>
    </Form>
  );
};

export default FormContact;
