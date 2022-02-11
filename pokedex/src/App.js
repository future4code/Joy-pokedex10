import React from "react"
import AddDetailsPage from "./pages/DetailsPage/AddDetailsPage";
import AddHomePage from "./pages/HomePage/AddHomePage";
import AddPokedexPage from "./pages/PokedexPage/AddPokedexPage";

const App = () => {
  return (
    <div>
     <AddDetailsPage/>
     <AddHomePage/>
     <AddPokedexPage/>
    </div>
  );
}

export default App;
