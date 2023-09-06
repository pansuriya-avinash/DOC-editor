import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";


import { IState } from "shared/interface/state";
;
import MySunEditor from "features/homePage/home";
import TinyMceEditor from "features/mce/mce";

const App: React.FC = () => {
  const isLogin: boolean = useSelector((state: IState) => state.auth.isLogin);

  // if (isLogin) {
  return (
      <Routes>
        <Route  path="/mce" element={<TinyMceEditor/>}/>
        <Route path="/" element={<MySunEditor />} />
      </Routes>
  );
};

export default App;
