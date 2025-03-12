import classes from "./App.module.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import List from "./Components/List";

import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("Projects");

  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={classes.layout}>
      <Header />
      <Sidebar
        updateSelectedOption={updateSelectedOption}
        selectedOption={selectedOption}
      />
      <List selectedOption={selectedOption} />
    </div>
  );
}

export default App;
