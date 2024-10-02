import "./App.css";
import React, { useState } from "react";
import { Article } from "../Article/Article";
import { AddArticle } from "../AddArticle/AddArticle";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Modal } from "../Modal/Modal";
import { createPortal } from 'react-dom';

function App() {
  const { news, addItem, deleteItem, editItem } = useLocalStorage("news");
  const [addArticle, setAddArticle] = useState(false);

  return (
    <div className="App">
        <h1>Новости</h1>
        <button type="button" onClick={() => setAddArticle(true)}>
          Добавить новость
        </button>
        {addArticle && createPortal( 
          (<Modal onClose={() => setAddArticle(false)}>
            <AddArticle onAdd={addItem} onClose={() => setAddArticle(false)} />
          </Modal>), document.body)}
        {news.map((el) => (
          <Article
            key={el.id}
            id={el.id}
            title={el.title}
            text={el.text}
            onEdit={editItem}
            onDelete={deleteItem}
          />
        ))}
    </div>
  );
}

export default App;
