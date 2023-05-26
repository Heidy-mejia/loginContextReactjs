
import Btn from "./Btn";
import { Context } from "../App";
import { useContext } from "react";

export default function Nav() {
  const [signedIn, setSignedIn] = useContext(Context);
  
  return (
    <div className="nav">
      <Btn />
      
    </div>
  );
}