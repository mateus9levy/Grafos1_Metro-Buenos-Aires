import React from "react";
import Home from "./pages/home"
import Header from "./components/header";
import { HeaderProvider } from "./context/HeaderContext";
function App() {

  return (
<HeaderProvider>
  <Header/>
  <Home/>
</HeaderProvider>
 
  );
}

export default App;
