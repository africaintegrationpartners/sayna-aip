import { useState } from "react";
import Button from "../ui/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "../../hooks";

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
    >
      <input type="hidden" name="form-name" value="query" />

      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" controlId="name" style={{ width: "48%" }}>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            name="nom"
            type="text"
            placeholder="Votre nom"
            required
          />
          <Form.Control.Feedback type="invalid">
            Veuillez saisir votre nom
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="prénoms"
          style={{ width: "48%" }}
        >
          <Form.Label>Prénoms</Form.Label>
          <Form.Control
            name="prénom"
            type="text"
            placeholder="Vos prénoms"
            required
          />
          <Form.Control.Feedback type="invalid">
            Veuillez saisir votre prénoms
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            name="tel"
            type="tel"
            placeholder="+1 23 456 789"
            required
          />
          <Form.Control.Feedback type="invalid">
            Veuillez saisir votre telephone
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{ width: "48%" }} className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Votre email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Veuillez saisir votre email
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3" style={{ width: "48%" }}>
          <Form.Label>Société</Form.Label>
          <Form.Control
            required
            name="société"
            type="text"
            placeholder="Votre société"
          />
          <Form.Control.Feedback type="invalid">
            Veuillez saisir votre société
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: "48%" }}>
          <Form.Label>Profil</Form.Label>
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
            Veuillez choisir votre fonction
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between">
        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>Sujet</Form.Label>
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
            Veuillez choisir une réponse
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group style={{ width: "48%" }} className="mb-3">
          <Form.Label>Pays</Form.Label>
          <Form.Select required name="pays">
            <option></option>
            <option value="Togo"> Togo</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Benin">Benin</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Veuillez choisir votre Pays
          </Form.Control.Feedback>
        </Form.Group>
      </div>

      <Form.Group className="mb-3">
        <Form.Label>Comment aviez-vous entendu parler de nous ?</Form.Label>
        <Form.Select required name="comment-trouver">
          <option></option>
          <option value="sms">SMS</option>
          <option value="email">E-mailing</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Veuillez choisir une réponse
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          type="text"
          placeholder="Votre message"
          as="textarea"
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Pièce jointe</Form.Label>
        <Form.Control name="pj" type="file" accept="image/*, .pdf" />
      </Form.Group>

      <Button className="w-100 my-4" type="submit">
        {t("cta.send")}
      </Button>
    </Form>
  );
};

export default FormContact;
