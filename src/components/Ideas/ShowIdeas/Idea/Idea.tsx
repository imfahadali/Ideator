import * as React from "react";
import { IdeaI } from "../IdeaList/IdeaList";
import styles from "./Idea.module.css";

interface IdeaProps {
  ideaItem: IdeaI;
}

const Idea = (props: IdeaProps): JSX.Element => {
  return (
    <div className={styles["idea-item"]}>
      <h4>{props.ideaItem.id}</h4>
      <h4>{props.ideaItem.idea}</h4>
      <sub className={styles["ideator"]}>-{props.ideaItem.ideator}</sub>
    </div>
  );
};
export default Idea;
