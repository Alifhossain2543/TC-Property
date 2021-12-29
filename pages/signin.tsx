import React, { FC, useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Input from "../components/custom/Input"
import {NextPage} from 'next'
import Register from '../components/base/Register'
interface login {
  email: string
  password: string
}
export interface Props {
  label: string
  type: string
  name: string
  id?: string
  placeholder?: string,
  isError : boolean 
}

const Signinn: NextPage = () => {
  const [isLoginScreenn, setIsLoginScreen] = useState(true)
  const loginValidation = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required!"),
  })

  const loginHandler = ({ email, password }: login) => {
    console.log(email, password)
  }

  return (
    <>
      <div className="min-h-[90vh] flex justify-center items-center bg-[url('../public/bgimage3.jpg')] p-0 bg-fixed bg-cover ">
        <div className="p-10 bg-gradient-to-r from-card-color/[0.8] to-card-two/[0.8] w-[85w] sm:w-[450px] rounded-xl shadow-xl">
          {/* Signup form */}

          {isLoginScreenn ? (
            <>
              <h1 className="text-center text-[20px] font-extrabold text-text-color-light        ">
                Sign in
              </h1>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginValidation}
                onSubmit={loginHandler}
              >
                {({ isSubmitting, touched, errors }) => {
                  return (
                    <Form className="w-[100%] p-[15px]">
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
                          touched.password == true &&
                          errors.password != undefined
                            ? true
                            : false
                        }
                        id="password"
                        placeholder="Your password..."
                      />
                      <p className="text-[12px] md:text-[14px] text-right text-primary-dark underline cursor-pointer">
                        Forgot password?
                      </p>
                      <button
                        disabled={isSubmitting}
                        className="bg-text-color-dark text-text-color p-[10px] rounded-full shadow-xl hover:text-primary-dark font-extrabold active:scale-[0.9]
               mt-[10px]"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </Form>
                  )
                }}
              </Formik>
              <div className="pl-5">
                <p className="text-[12px]  font-extrabold text-text-color-dark">
                  OR
                </p>
                <p
                  onClick={() => setIsLoginScreen(!isLoginScreenn)}
                  className="mt-[5px] text-primary-dark underline cursor-pointer"
                >
                  Register
                </p>
              </div>
            </>
          ) : (
            <Register setLogin={setIsLoginScreen} isLoginScreen={isLoginScreenn} />
          )}
        </div>
      </div>
    </>
  )
}

export default Signinn
