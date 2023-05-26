import React, { useState } from "react";
import Btn from "./components/Btn";

export const Context = React.createContext(false);

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Btn />
    </Context.Provider>
  );
}
