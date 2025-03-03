import classes from "./List.module.css";
import Item from "./Item";

const List = () => {
  return (
    <div className={classes.content}>
      <h1>CONTENT</h1>
      <ul className={classes.listGrid}>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
      <button className={classes.addButton}>Add New</button>
    </div>
  );
};

export default List;
