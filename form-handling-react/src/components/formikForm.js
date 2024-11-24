import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required."),
  });
  
  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Form submission handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);

    // Simulate API call
    alert("User Registered Successfully!");

    // Reset form after submission
    resetForm();
  };

  return React.createElement(
    "div",
    { style: { maxWidth: "400px", margin: "auto", padding: "20px" } },
    React.createElement("h2", null, "Register with Formik"),
    React.createElement(
      Formik,
      { initialValues, validationSchema, onSubmit },
      ({ isSubmitting }) =>
        React.createElement(
          Form,
          null,
          React.createElement(
            "div",
            { style: { marginBottom: "10px" } },
            React.createElement("label", { htmlFor: "username" }, "Username:"),
            React.createElement(Field, {
              type: "text",
              id: "username",
              name: "username",
              style: { width: "100%", padding: "8px", marginTop: "5px" },
            }),
            React.createElement(ErrorMessage, {
              name: "username",
              component: "div",
              style: { color: "red", marginTop: "5px" },
            })
          ),
          React.createElement(
            "div",
            { style: { marginBottom: "10px" } },
            React.createElement("label", { htmlFor: "email" }, "Email:"),
            React.createElement(Field, {
              type: "email",
              id: "email",
              name: "email",
              style: { width: "100%", padding: "8px", marginTop: "5px" },
            }),
            React.createElement(ErrorMessage, {
              name: "email",
              component: "div",
              style: { color: "red", marginTop: "5px" },
            })
          ),
          React.createElement(
            "div",
            { style: { marginBottom: "10px" } },
            React.createElement("label", { htmlFor: "password" }, "Password:"),
            React.createElement(Field, {
              type: "password",
              id: "password",
              name: "password",
              style: { width: "100%", padding: "8px", marginTop: "5px" },
            }),
            React.createElement(ErrorMessage, {
              name: "password",
              component: "div",
              style: { color: "red", marginTop: "5px" },
            })
          ),
          React.createElement(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              style: {
                padding: "10px",
                background: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
              },
            },
            isSubmitting ? "Submitting..." : "Register"
          )
        )
    )
  );
};

export default FormikForm;
