/************************************************/
// Importamos las dependencias //
/************************************************/
import React from "react";
import PropTypes from "prop-types";
import { withFormsy } from "formsy-react";
import validateInput from "./validateInput";
/************************************************/
// Definimos imput personalizado de formularios //
/************************************************/
const FormsyInput = (props) => {
  /************************************************/
  // Obtenemos las propiedades //
  /************************************************/
  const {
    id,
    label,
    type,
    placeholder,
    name,
    value,
    onChange,
    model,
    errorMessage,
  } = props;

  /************************************************/
  // Funcion que controla el cambio de envento del input //
  const changeValue = (e) => {
    if (props.accept && props.accept !== "") {
      if (!validateInput(props.accept, e.currentTarget.value)) {
        return console.log("SI ES");
      }
    }
    props.setValue(e.currentTarget.value);
    if (onChange) {
      onChange(e);
    }
  };
  /************************************************/
  /************************************************/
  // Renderizamos el componente //
  /************************************************/

  return (
    <div className="form-group">
      {model === "icon" ? (
        <>
          <div className="position-relative has-icon-left">
            <label htmlFor={id} className="sr-only">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={changeValue}
              className="form-control"
              placeholder={placeholder}
              maxLength={props.maxLength ? props.maxLength : ""}
              style={
                errorMessage && {
                  borderColor: "#fd3550",
                  boxShadow: "0.0.0.02rem rgb(253,53,80,0.25)",
                }
              }
            />
            <div className="form-control-position">
              <i className={props.icon} />
            </div>
            <span className="span text-danger font-weight-bold">
              {errorMessage}
            </span>
          </div>
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            className="form-control"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={changeValue}
            maxLength={props.maxLength ? props.maxLength : ""}
            style={
              errorMessage && {
                borderColor: "#fd3550",
                boxShadow: "0.0.0.02rem rgb(253,53,80,0.25)",
              }
            }
          />
          <span className="text-danger font-weight-bold">{errorMessage}</span>
        </>
      )}
    </div>
  );
};
/************************************************/
// Declaramos los tipos de propiedades //
/************************************************/
FormsyInput.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
/************************************************/
// Exportamos el componente //
/************************************************/
export default withFormsy(FormsyInput);
