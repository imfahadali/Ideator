import * as React from "react";
import styles from "./Home.module.css";
const Home: React.FC = () => {
  console.log("REndering home");
  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-text"]}>
        <h1>Ideate !</h1>
        <p>A place where you can maintain a log of your ideas.</p>
      </div>
      {/* <div className={styles["home-image"]}>
        <img src="../../../../public/logo512.png" alt="adskfjlk" />
      </div> */}
    </div>
  );
};
export default Home;
