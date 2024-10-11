import "./App.css";
import React, { useState } from "react";
import { Article } from "../Article/Article";
import { AddArticle } from "../AddArticle/AddArticle";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Modal } from "../Modal/Modal";
import { createPortal } from 'react-dom';
import { tabs } from "../../shared/constants/fields";
import { Routes, Route } from "react-router-dom";
import { Tab } from "../Tab/Tab";

function App() {
  return (
    <div className="App">
      <div className="header">
        {tabs.map(({name, title}, i) => <a key={i} href={`/${name}`}>{title}</a>)}
      </div>
      <Routes>
        {tabs.map(({name, title}, i) => {console.log(name, title); return <Route key={i} path={`/${name}`} element={<Tab type={name} title={title}/>} />})}
      </Routes>
    </div>
  );
}

export default App;

{/* <div style={{width: "100px", height: "100px", backgroundColor: "red"}}/> */}

{/* <Tab type={t.name} title={t.title}/> */}