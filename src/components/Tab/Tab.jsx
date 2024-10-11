import "./Tab.css";
import React, { useState } from "react";
import { Article } from "../Article/Article";
import { AddArticle } from "../AddArticle/AddArticle";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Modal } from "../Modal/Modal";
import { createPortal } from 'react-dom';
import { fields, tabs } from "../../shared/constants/fields";

export function Tab({type, title}) {
  const { news, addItem, deleteItem, editItem } = useLocalStorage(type);
  const [addArticle, setAddArticle] = useState(false);

  return (
    <div className="tab">
        <h1>{title}</h1>
        <button type="button" onClick={() => setAddArticle(true)}>
          Добавить
        </button>
        {addArticle && createPortal( 
          (<Modal onClose={() => setAddArticle(false)}>
            <AddArticle items={fields.type} type={type} onAdd={addItem} onClose={() => setAddArticle(false)} />
          </Modal>), document.body)}
        {news.map((el) => (
          <Article
            type={type}
            key={el.id}
            id={el.id}
            elements={fields[type]}
            data={el}
            onEdit={editItem}
            onDelete={deleteItem}
          />
        ))}
    </div>
  );
}
