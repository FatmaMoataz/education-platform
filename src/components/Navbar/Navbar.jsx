import React from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../state/act/actAuth";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() =>
        dispatch(
          signUp({
            fullName: "mo ashraf ",
            email: "mahmoudaliefullstack@essgmail.com",
            password: "My987654321@",
            cpassword: "My987654321@",
            phoneNumber: "01165891463",
            classLevel: "Grade 1 Secondary",
          })
        )
      }
    >
      Navbar
    </button>
  );
}
