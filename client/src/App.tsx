import classes from "./App.module.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import List from "./Components/List";

function App() {
  return (
    <div className={classes.layout}>
      <Header />
      <Sidebar />
      <List />
    </div>
  );
}

export default App;
