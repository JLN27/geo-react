import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div class="header">
      <Link to="/about">About </Link>
        Token: <strong>{authToken}</strong>
      </div>
      <hr />
    </>
  );
}