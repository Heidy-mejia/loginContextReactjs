import { useContext } from "react";
import { Context } from "../App";

export default function Btn() {
  const [signedIn, setSignedIn] = useContext(Context);

  return (
    <div>
      <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "sign out" : "sign in"}
    </button>
    
    <p>{signedIn ? "sign out" : "sign in"}</p>
    </div>
  );
}

