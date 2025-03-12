import classes from "./Sidebar.module.css";

type SidebarProps = {
  updateSelectedOption: (option: string) => void;
  selectedOption: string;
};

const Sidebar = ({ updateSelectedOption, selectedOption }: SidebarProps) => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <button
            onClick={() => updateSelectedOption("Projects")}
            className={`${classes.sidebarOption} ${
              selectedOption === "Projects" ? classes.active : ""
            }`}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => updateSelectedOption("Fabrics")}
            className={`${classes.sidebarOption} ${
              selectedOption === "Fabrics" ? classes.active : ""
            }`}
          >
            Fabrics
          </button>
        </li>
        <li>
          <button
            onClick={() => updateSelectedOption("Patterns")}
            className={`${classes.sidebarOption} ${
              selectedOption === "Patterns" ? classes.active : ""
            }`}
          >
            Patterns
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
