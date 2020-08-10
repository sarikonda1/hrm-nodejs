import React from "react";
import { useForm } from "react-hook-form";
import Validators from './_helpers/Validator';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <label>
      Email / User Name:
        <input
          name="username"
          ref={register({required: true, maxLength: 5})}
        />
        <Validators {...errors.username}/>
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          ref={register({required: true, maxLength: 5})}
        />
        <Validators {...errors.password}/>
      </label>
      <input type="submit" />
    </form>
  );
}