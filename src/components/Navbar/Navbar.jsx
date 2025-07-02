import React from "react";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../state/act/actAuth";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch(
          logIn({
            email: "S_admin@gmail.com",
            password: "Sadmin123@",
          })
        )
      }
    >
      Navbar
    </button>
  );
}
