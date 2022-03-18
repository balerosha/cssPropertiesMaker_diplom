import { ChangeEvent, FormEvent } from "react";
import { auth } from "../../firebase";
import { Redirect } from "react-router-dom";
import { useSignInHooks } from "./hooks/useSignInHooks";

export const SignIn = () => {
  const { currentUserAuth, values, setValues, history } = useSignInHooks();
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(values.email, values.password);
    history.push("/");
  };

  return currentUserAuth ? (
    <Redirect to="/" />
  ) : (
    <form onSubmit={handleSubmit} className="sign_in_up">
      <p>Sign In</p>
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
          placeholder="******"
          type="password"
          onChange={handleChange}
          className="sign_inputs"
        />
        password
      </div>
      <div className="sign_btns_block">
        <button className="sign_btns">Submit</button>
        <button
          className="sign_btns"
          onClick={() => {
            history.push("/");
          }}
        >
          SignUp
        </button>
      </div>
    </form>
  );
};
