import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "../../hooks";
import classes from "./style.module.css";

import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";

const FormContact = () => {
  const t = useTranslation();
  const [validated, setValidated] = useState(false);

  const phoneInputRef = useRef<any>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const phoneInput = phoneInputRef.current as HTMLInputElement;
    if (!phoneInput) return;

    phoneInput.classList.add("form-control");
    phoneInput.setAttribute("name", "telephone");

    const feedbackElt = document.createElement("div");
    feedbackElt.textContent = t("contact.error_phone");
    feedbackElt.classList.add("invalid-feedback");
    phoneInput.parentElement?.appendChild(feedbackElt);

    return () => {
      try {
        phoneInput.parentElement?.removeChild(feedbackElt);
      } catch (err) {
        console.warn(err);
      }
    };
  }, [t]);

  const validateInputTel = useCallback((val: E164Number) => {
    if (isPossiblePhoneNumber(val)) {
      phoneInputRef.current?.classList.remove("is-invalid");
      phoneInputRef.current?.classList.add("is-valid");
    } else {
      phoneInputRef.current?.classList.remove("is-valid");
      phoneInputRef.current?.classList.add("is-invalid");
    }
  }, []);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const val = phoneInputRef.current?.value ?? "";
    validateInputTel(val);
  };

  const [value, setValue] = useState<E164Number>("");

  const onPhoneInputChange = (val: E164Number) => {
    setValue(() => val);
  };

  useEffect(() => {
    if (formRef.current?.classList.contains("was-validated"))
      validateInputTel(value ?? "");
  }, [value, validateInputTel]);

  return (
    <Form
      ref={formRef}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      name="Contact Us"
      method="POST"
      action="/form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={classes.form}
      encType="multipart/form-data"
    >
      <input type="hidden" name="form-name" value="Contact Us" />

      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="name" style={{ width: "48%" }}>
          <Form.Label>{t("contact.prompt_name")}</Form.Label>
          <Form.Control
            name="nom"
            type="text"
            placeholder={t("contact.placeholder_name")}
            required
            isInvalid={false}
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
        <Form.Group style={{ width: "48%" }} className="mb-3 ">
          <Form.Label>{t("contact.prompt_phone")}</Form.Label>
          <PhoneInput
            value={value}
            onChange={onPhoneInputChange}
            countries={["CI", "BJ", "TG"]}
            international
            countryCallingCodeEditable={false}
            defaultCountry="CI"
            ref={phoneInputRef}
            className={classes.phoneInput}
          />
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
            <option value="Funders">{t("contact.funders")}</option>
            <option value="State representative">
              {t("contact.state-representative")}
            </option>
            <option value="Company manager">
              {t("contact.company-manager")}
            </option>
            <option value="Entrepreneur">{t("contact.entrepreneur")}</option>
            <option value="Executive staff">
              {t("contact.executive-staff")}
            </option>
            <option value="Young graduate">
              {t("contact.young-graduate")}
            </option>
            <option value="Other">{t("contact.other")}</option>
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
            <option value="SME programs">{t("contact.program-sme")}</option>
            <option value="Young entrepreneur programs">
              {t("contact.program-young-entrepreneur")}
            </option>
            <option value="Women programs">{t("contact.program-women")}</option>
            <option value="Professional insertion programs">
              {t("contact.program-insertion-pro")}
            </option>
            <option value="Training">{t("contact.training")}</option>
            <option value="Study">{t("contact.study")}</option>
            <option value="Advice">{t("contact.advice")}</option>
            <option value="Technical support">
              {t("contact.tech-support")}
            </option>
            <option value="Other">{t("contact.other")}</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_topic")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>{t("contact.prompt_how-did-you-hear")}</Form.Label>
          <Form.Select required name="comment-trouver">
            <option></option>
            <option value="SMS / E-mailing">SMS / E-mailing</option>
            <option value="Seminar">{t("contact.seminar")}</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Written Press">{t("contact.written-press")}</option>
            <option value="Other">{t("contact.other")}</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_how-did-you-hear")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

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
