import Cotton from "../../public/Cotton.jpeg";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <div className={classes.item}>
      <div className={classes.badge}>reserved</div>
      <img src={Cotton} alt="" />
      <div>
        <h2>Title</h2>
        <p>AMOUNT</p>
      </div>
    </div>
  );
};

export default Item;
