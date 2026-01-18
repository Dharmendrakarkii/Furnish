
// "use client";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";

// const RegisterSchema = Yup.object({
//   username: Yup.string().required("Username required"),
//   email: Yup.string()
//   .email("Invalid email").required("Email required"),
//   password: Yup.string()
//   .min(6, "Min 6 characters").required("Password required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords do not match")
//     .required("Confirm password required"),
// });

// const Register = () => {
//   const router = useRouter();

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "rgba(8, 4, 4, 0.9)",
//           padding: "30px",
//           borderRadius: "10px",
//           width: "380px",
//           boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "30px",
//             fontWeight: "bold",
//             color: "#3B82F6",
//             textAlign: "center",
//             paddingBottom: "10px",
//             fontFamily: "math",
//           }}
//         >
//           Create Account
//         </h1>

//         <Formik
//           initialValues={{
//             username: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//           }}
//           validationSchema={RegisterSchema}
//           onSubmit={(values) => {
//             console.log(values);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form style={{ color: "white", display: "flex", flexDirection: "column", gap: "12px" }}>
              
//               <div>
//                 <Field
//                   type="text"
//                   name="username"
//                   placeholder="Enter username"
//                   style={inputStyle}
//                 />
//                 <ErrorMessage name="username" component="p" style={errorStyle} />
//               </div>

//               <div>
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   style={inputStyle}
//                 />
//                 <ErrorMessage name="email" component="p" style={errorStyle} />
//               </div>

//               <div>
//                 <Field
//                   type="password"
//                   name="password"
//                   placeholder="Create password"
//                   style={inputStyle}
//                 />
//                 <ErrorMessage name="password" component="p" style={errorStyle} />
//               </div>

//               <div>
//                 <Field
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm password"
//                   style={inputStyle}
//                 />
//                 <ErrorMessage name="confirmPassword" component="p" style={errorStyle} />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 style={{
//                   backgroundColor: "#3B82F6",
//                   color: "white",
//                   fontSize: "18px",
//                   height: "45px",
//                   border: "none",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                   marginTop: "10px",
//                 }}
//               >
//                 Register
//               </button>
//             </Form>
//           )}
//         </Formik>

//         <p style={{ textAlign: "center", marginTop: "18px", color: "#fff" }}>
//           Already have an account?{" "}
//           <span
//             onClick={() => router.push("/login")}
//             style={{ color: "#3B82F6", cursor: "pointer" }}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   padding: "10px",
//   fontSize: "16px",
//   borderRadius: "5px",
//   border: "1px solid #ffffff",
//   width: "100%",
// };

// const errorStyle = {
//   color: "red",
//   fontSize: "12px",
//   marginTop: "4px",
// };

// export default Register;
