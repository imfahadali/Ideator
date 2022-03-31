import React from "react";
import { Routes, Route } from "react-router-dom";
import IdeaProvider from "./store/IdeaProvider";
import AddNewIdeaPage from "./Pages/AddNewIdeaPage";
import IdeaListPage from "./Pages/IdeaListPage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SIgnInPage";
import Navbar from "./components/Layout/Navbar/Navbar";
import styles from "./App.module.css";
import Home from "./components/Layout/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./store/AuthProvider";

import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <IdeaProvider>
        <Navbar />
        <ToastContainer
          hideProgressBar={true}
          pauseOnHover={false}
          theme="dark"
        />

        {/* do i need to make seperate wrapper component to give it a margin bot or div is just fine  */}
        <div className={styles["wrapper"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-idea" element={<AddNewIdeaPage />} />
            <Route path="/ideas" element={<IdeaListPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </IdeaProvider>
    </AuthProvider>
  );
};

// function A(props){
//   return <></>
// }

// <A prop1={2} prop2={3}

// {prop1: 2, prop2: 3}

// props: IdeaPRop = {ideas: IdealFOR[] }

export default App;
