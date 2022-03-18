import { ChangeEvent, FormEvent } from "react";
import { auth } from "../../firebase";
import { Redirect } from "react-router-dom";
import { useSignUpHooks } from "./hooks/useSignUpHooks";

export const SignUp = () => {
  const { currentUserAuth, values, setValues, history } = useSignUpHooks();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = () => {
    history.push("/signin");
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await auth.createUserWithEmailAndPassword(values.email, values.password);
    history.push("/");
  };

  return currentUserAuth ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={handleSubmit} className="sign_in_up">
      <p>Sign Up</p>
      <div className="sign_email">
        <input
          name="email"
          placeholder="ivanov@gmail.com"
          onChange={handleChange}
          className="sign_inputs"
        />
        email
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="******"
          onChange={handleChange}
          className="sign_inputs"
        />
        password
      </div>

      <div className="sign_btns_block">
        <button className="sign_btns">Submit</button>
        <button className="sign_btns" onClick={handleClick}>
          SignIn
        </button>
      </div>
    </form>
  );
};
