import * as yup from "yup";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const errorMessage = "Use lowercase, uppercase, and digits";

const signupSchema = yup.object().shape({
  fullName: yup.string().min(5).max(30).required("Username is required"),
  gmail: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(8).max(25)
    .matches(passwordPattern, { message: errorMessage })
    .required("Password is required"),
});

export default signupSchema;
