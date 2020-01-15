import React from "react";
import useForm from "react-hook-form";
import {
  LoginForm,
  FormInput,
  FormLabel,
  FormSubmit,
  Error
} from "../StyledComponents";

const AdminLogin = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <LoginForm
      encType="multipart/form-data"
      method="POST"
      onSubmit={handleSubmit}
    >
      <FormLabel>Name</FormLabel>
      <FormInput
        name="name"
        type="text"
        placeholder="Name..."
        ref={register({ required: true })}
      />
      {errors.name && <Error>Please enter your name</Error>}
      <FormLabel>Password</FormLabel>
      <FormInput
        name="password"
        type="password"
        placeholder="Password..."
        ref={register({ required: true })}
      />
      {errors.password && <Error>Password incorrect</Error>}
      {errors.message && <Error>Please enter a message</Error>}
      <FormSubmit type="submit" value="Login" />
    </LoginForm>
  );
};
export default AdminLogin;
