import React, { useEffect, useState } from "react";
import Formsy from "formsy-react";
import FormsyInput from "../../../helpers/FormsyInput";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { getList } from "../../../redux/actions/listData";
const ContactForm = () => {
  const dispatch = useDispatch();

  const initialFormValuesEmail = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [
    formValuesEmail,
    handleInputChangeEmail,
    resetformValuesEmail,
    setformValuesEmail,
  ] = useForm(initialFormValuesEmail);

  const [buttonState, setButtonState] = useState(true);

  const disableButtonNewPro = () => {
    setButtonState(false);
  };

  const enableButtonNewPro = () => {
    setButtonState(true);
  };

  const sendEmail = async () => {
    if (formValuesEmail) {
      const body = formValuesEmail;
      dispatch(
        getList("/sendEmail/email", "", "POST", body, {
          prevMess: "Enviando...",
          confMess: "Mensaje Enviado",
          errMess: "Error de Envio",
        })
      );
      resetformValuesEmail(initialFormValuesEmail);
    }
  };

  return (
    <section className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <h2>Envienos un mensaje</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            quibusdam deleniti porro praesentium. Aliquam minus quisquam velit
            in at nam.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <Formsy
                  onSubmit={sendEmail}
                  onValid={enableButtonNewPro}
                  onInvalid={disableButtonNewPro}
                >
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <FormsyInput
                          id="name"
                          label="Nombre"
                          type="text"
                          name="name"
                          placeholder="Juan"
                          value={formValuesEmail.name}
                          onChange={handleInputChangeEmail}
                          accept="onlyLetterAndSpace"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <FormsyInput
                          id="email"
                          label="E-mail"
                          type="email"
                          name="email"
                          placeholder="juan@gmail.com"
                          value={formValuesEmail.email}
                          onChange={handleInputChangeEmail}
                          accept="onlyLetterAndAtSingScriptUnderscore"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <FormsyInput
                          id="phone"
                          label="Telefono"
                          type="text"
                          name="phone"
                          placeholder="987654321"
                          value={formValuesEmail.phone}
                          onChange={handleInputChangeEmail}
                          accept="onlyNumber"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <FormsyInput
                          id="subject"
                          label="Asunto"
                          type="text"
                          name="subject"
                          placeholder="Interesado"
                          value={formValuesEmail.subject}
                          onChange={handleInputChangeEmail}
                          accept="onlyLetterAndSpace"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="message" className="sr-only">
                          Mensaje
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          required
                          placeholder="Me gustaria contratar de sus servicios"
                          value={formValuesEmail.message}
                          onChange={handleInputChangeEmail}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        className="default-btn btn-two"
                        disabled={!buttonState}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </Formsy>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
