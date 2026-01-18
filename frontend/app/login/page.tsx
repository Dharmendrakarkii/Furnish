
"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();

  const handleLogin = async (values: { username: string; password: string }) => {
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/auth/login",
        values
      );

      if (data?.token) {
        localStorage.setItem("token", data.token);
        toast.success("Login Successful!");
        router.push("/");
      }
    } catch (err: any) {
      toast.error(err?.response?.data || "Login Failed!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(8, 4, 4, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontStyle: "bold",
            color: "#3B82F6",
            fontFamily: "math",
            padding: "12px",
            textAlign: "center",
          }}
        >
          Welcome Back!
        </h1>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ color: "white", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Field
                name="username"
                placeholder="Enter username"
                style={inputStyle}
                disabled={isSubmitting}
              />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />

              <Field
                name="password"
                type="password"
                placeholder="Enter password"
                style={inputStyle}
                disabled={isSubmitting}
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#3B82F6",
                  color: "white",
                  fontSize: "18px",
                  height: "45px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "10px",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "Processing..." : "Login"}
              </button>

              <p style={{ color: "white", textAlign: "center", marginTop: "15px" }}>
                Forgot password?
                <br /><br />
                Don't have an account?{" "}
                <span
                  onClick={() => router.push("/register")}
                  style={{ color: "#3B82F6", cursor: "pointer" }}
                >
                  Sign Up
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #fdfdfdff",
};

export default Login;
