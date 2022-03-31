import React, { useContext } from "react";
import styles from "./IdeaList.module.css";
import ideaContext from "../../../../store/idea-context";
import Idea from "../Idea/Idea";
export interface IdeaI {
  id: number;
  idea: string;
  ideator: string;
}
interface IdeaListProps {
  ideaList: IdeaI[];
}

const IdeaList: React.FC<IdeaListProps> = (
  props: IdeaListProps
): JSX.Element => {
  const ideaCtxt = useContext(ideaContext);
  console.log(ideaCtxt.ideaList);
  return (
    <>
      {ideaCtxt.ideaList.length === 0 && (
        <div className={styles["no-ideas"]}>
          <div className={styles["no-ideas-message"]}>
            <h1>No Ideas Found</h1>
            <p>Be Creative</p>
          </div>

          <div className={styles["no-ideas-image"]}></div>
        </div>
      )}
      <div className={styles["idea-container"]}>
        {ideaCtxt.ideaList.map((item: IdeaI) => (
          <Idea key={item.id} ideaItem={item} />
        ))}
      </div>
    </>
  );
};

export default IdeaList;
