import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "../../hooks";
import classes from "./style.module.css";

import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
import { useContactContext } from "../../contexts/contact";
import { ContactContent } from "../../types";

const FormContact = () => {
  const content = useContactContext();

  const getSelectOptionsFor = (
    selector: Exclude<keyof ContactContent, "_id" | "__typename">
  ) => {
    return (
      <>
        <option></option>
        {(content?.[selector] as any)?.map((p: any, idx: number) => (
          <option key={idx} value={p ?? ""}>
            {p}
          </option>
        ))}
      </>
    );
  };

  const t = useTranslation();
  const [validated, setValidated] = useState(false);

  const phoneInputRef = useRef<any>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // ****************
  // PHONE NUMBER
  const [phoneNumber, setPhoneNumber] = useState<E164Number>("");

  const onPhoneInputChange = (val: E164Number) => {
    setPhoneNumber(() => val);
  };

  useEffect(() => {
    const phoneInput = phoneInputRef.current as HTMLInputElement;
    if (!phoneInput) return;

    phoneInput.classList.add("form-control");

    // const feedbackElt = document.createElement("div");
    // feedbackElt.textContent = t("contact.error_phone");
    // feedbackElt.classList.add("invalid-feedback");
    // phoneInput.parentElement?.appendChild(feedbackElt);

    // return () => {
    //   try {
    //     phoneInput.parentElement?.removeChild(feedbackElt);
    //   } catch (err) {
    //     console.warn(err);
    //   }
    // };
  }, [t]);

  const validatePhoneNumber = useCallback((val: E164Number) => {
    if (isPossiblePhoneNumber(val)) {
      phoneInputRef.current?.classList.remove("is-invalid");
      phoneInputRef.current?.classList.add("is-valid");
    } else {
      phoneInputRef.current?.classList.remove("is-valid");
      phoneInputRef.current?.classList.add("is-invalid");
    }
  }, []);

  useEffect(() => {
    if (formRef.current?.classList.contains("was-validated"))
      validatePhoneNumber(phoneNumber ?? "");
  }, [phoneNumber, validatePhoneNumber]);

  // ****************
  // SUBMIT FORM
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const data = new FormData(form);
    console.log({ data });
    alert("hello");

    setValidated(true);

    const val = phoneInputRef.current?.value ?? "";
    validatePhoneNumber(val);
  };
  return (
    <Form
      ref={formRef}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      name="Contact Us"
      method="POST"
      action="/form"
      className={classes.form}
      encType="multipart/form-data"
    >
      <input type="hidden" name="form-name" value="Contact Us" />

      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="name" style={{ width: "48%" }}>
          <Form.Label>{t("contact.prompt_name")}</Form.Label>
          <Form.Control
            name="Name"
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
            name="First name"
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
            value={phoneNumber}
            onChange={onPhoneInputChange}
            countries={["CI", "BJ", "TG"]}
            international
            countryCallingCodeEditable={false}
            defaultCountry="CI"
            ref={phoneInputRef}
            className={classes.phoneInput}
          />
          {/* workaround to be able to submit phone number */}
          <input
            readOnly
            type="tel"
            className="d-none"
            name="Telephone"
            value={phoneNumber}
          />
        </Form.Group>
        <Form.Group style={{ width: "48%" }} className="mb-3" controlId="email">
          <Form.Label>{t("contact.prompt_email")}</Form.Label>
          <Form.Control
            name="Email"
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
            name="Company"
            type="text"
            placeholder={t("contact.placeholder_company")}
          />
          <Form.Control.Feedback type="invalid">
            {t("contact.error_company")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: "48%" }}>
          <Form.Label>{t("contact.prompt_profile")}</Form.Label>
          <Form.Select required name="Profile">
            {getSelectOptionsFor("profile")}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_profile")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>{t("contact.prompt_topic")}</Form.Label>
          <Form.Select required name="Topic">
            {getSelectOptionsFor("topic")}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_topic")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>{t("contact.prompt_how-did-you-hear")}</Form.Label>
          <Form.Select required name="How did you hear">
            {getSelectOptionsFor("how_did_you_hear_about_us")}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {t("contact.error_how-did-you-hear")}
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>{t("contact.prompt_message")}</Form.Label>
        <Form.Control
          name="Message"
          type="text"
          placeholder={t("contact.placeholder_message")}
          as="textarea"
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>{t("contact.prompt_attachment")}</Form.Label>
        <Form.Control name="Attachment" type="file" accept="image/*, .pdf" />
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        {t("cta.send")}
      </Button>
    </Form>
  );
};

export default FormContact;
