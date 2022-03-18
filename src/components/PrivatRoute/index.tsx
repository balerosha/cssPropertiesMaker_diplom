import { useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";

type PropsPrivatRoute = {
  component: React.ElementType;
};

export const PrivatRoute = ({
  component: Component,
  ...restProps
}: RouteProps & PropsPrivatRoute) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...restProps}
      render={(props) =>
        currentUser ? (
          <>
            <button
              style={{
                position: "absolute",
                border: "2px solid white",
                padding: "15px",
                background: "blue",
                color: "white",
                borderRadius: "50px",
              }}
              onClick={() => auth.signOut()}
            >
              SignOut
            </button>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
