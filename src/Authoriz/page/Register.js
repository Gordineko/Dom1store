import React, { useContext } from "react";
import "../style/register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import remove from "../../MainLanding/image/icone/remove.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { CustomContext } from "../../utils/Context";

const SigninSchema = Yup.object().shape({
  name: Yup.string().required("Поле должно быть заполнено"),
  surname: Yup.string().required("Поле должно быть заполнено"),
  phoneNamber: Yup.string()
    .matches(/^\+380\d{9}$/, "+380...")
    .required("Поле должно быть заполнено"),
  email: Yup.string()
    .email("Invalid email")
    .required("Поле должно быть заполнено"),
  password: Yup.string()
    .min(6, "Короткий пароль!")
    .required("Поле должно быть заполнено"),
});

function Auth({ handleClick, RegActive }) {
  const context = useContext(CustomContext);

  console.log(context);

  function registerUser(values) {
    let User = values;
    console.log(values);

    axios
      .post("http://localhost:3330/register", User)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }

  return (
    <div className={RegActive ? "register-active" : "register"}>
      <div className="register__form">
        <div className="register__form-prew">
          <h1>Registration</h1>
          <img onClick={handleClick} src={remove} alt="404" />
        </div>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            phoneNamber: "",
            email: "",
            password: "",
          }}
          validationSchema={SigninSchema}
          onSubmit={(values) => {
            registerUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="register__form-content">
                <label className="register__name-label" htmlFor="name">
                  Имя
                </label>
                <Field className="register__input name" name="name" />
                {errors.name && touched.name ? (
                  <div className="register__name-msg msg">{errors.name}</div>
                ) : null}
                <label className="register__surname-label" htmlFor="surname">
                  Фамилия
                </label>
                <Field className="register__input surname" name="surname" />
                {errors.surname && touched.surname ? (
                  <div className="register__surname-msg msg">
                    {errors.surname}
                  </div>
                ) : null}
                <label className="register__phoneNamber-label" htmlFor="email">
                  Номер телефона
                </label>
                <Field
                  className="register__input phoneNamber"
                  name="phoneNamber"
                />
                {errors.phoneNamber && touched.phoneNamber ? (
                  <div className="register__phoneNamber-msg msg">
                    {errors.phoneNamber}
                  </div>
                ) : null}
                <label className="register__email-label" htmlFor="email">
                  Эл. почта
                </label>
                <Field
                  className="register__input email"
                  name="email"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="register__email-msg msg">{errors.email}</div>
                ) : null}
                <label className="register__password-label" htmlFor="email">
                  Придумайте пароль
                </label>
                <Field className="register__input password" name="password" />
                {errors.password && touched.password ? (
                  <div className="register__password-msg msg">
                    {errors.password}
                  </div>
                ) : null}
                <button className="register__button" type="submit">
                  Зарегестрироваться
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Auth;
