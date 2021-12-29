import React from 'react'
import * as Yup from "yup"
import Input from '../custom/Input'
import { Formik, Form } from 'formik'
const signupValidation = Yup.object().shape({
  fullName: Yup.string()
    .min(6, "Name must be at least 6 characters long")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  cPassword: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value
    }
  ),
})

interface register {
  email: string,
  fullName : string,
  password : string,
  cPassword : string
}

interface Props {
  setLogin: React.SetStateAction<any>,
  isLoginScreen : boolean
}

const Register = ({ setLogin, isLoginScreen }: Props) => {
  const registerHandler = (data: register) => {
    console.log(data)
  }

  return (
    <div>
      <h1 className="text-center text-[20px] font-extrabold text-text-color-light">
        Sign in
      </h1>
      <Formik
        initialValues={{ email: "", password: "", fullName: "", cPassword: "" }}
        validationSchema={signupValidation}
        onSubmit={registerHandler}
      >
        {({ isSubmitting, touched, errors }) => {
          return (
            <Form className="w-[100%] p-[15px]">
              <Input
                label="Full Name"
                name="fullName"
                type="fullName"
                id="fullName"
                isError={
                  touched.fullName == true && errors.fullName != undefined
                    ? true
                    : false
                }
                placeholder="Your Full ame..."
              />
              <Input
                label="Email"
                name="email"
                type="email"
                id="email"
                isError={
                  touched.email == true && errors.email != undefined
                    ? true
                    : false
                }
                placeholder="Your email address..."
              />
              <Input
                label="Password"
                name="password"
                type="password"
                isError={
                  touched.password == true && errors.password != undefined
                    ? true
                    : false
                }
                id="password"
                placeholder="Your password..."
              />

              <Input
                label="Confirm Password"
                name="cPassword"
                type="Password"
                isError={
                  touched.cPassword == true && errors.cPassword != undefined
                    ? true
                    : false
                }
                id="cPassword"
                placeholder="Confirm password..."
              />

              <button
                disabled={isSubmitting}
                className="bg-text-color-dark text-text-color p-[10px] rounded-full shadow-xl hover:text-primary-dark font-extrabold active:scale-[0.9]
               mt-[10px]"
                type="submit"
              >
                Register
              </button>
            </Form>
          )
        }}
      </Formik>
      <div className="pl-5">
        <p className="text-[12px]  font-extrabold text-text-color-dark">OR</p>
        <p
          onClick={() => setLogin(!isLoginScreen)}
          className="mt-[5px] text-primary-dark underline cursor-pointer"
        >
          Login
        </p>
      </div>
    </div>
  )
}

export default Register
