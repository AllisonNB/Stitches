import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li className={classes.sidebarOption}>Fabrics</li>
        <li className={classes.sidebarOption}>Patterns</li>
        <li className={classes.sidebarOption}>Projects</li>
      </ul>
    </div>
  );
};

export default Sidebar;
