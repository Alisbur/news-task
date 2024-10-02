import React, {useState} from "react";
import "./Article.css";
import { createPortal } from 'react-dom';
import { Modal } from "../Modal/Modal";
import { EditArticle } from "../EditArticle/EditArticle";

export const Article = ({id, title, text, onEdit, onDelete}) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <article className="article">
      <h3 className="article__title" title={title}>{title}</h3>
      <div className="article__text">{text}</div>
      <div className="article__controls">

        <button 
          type="button" 
          onClick={()=> {
            setIsEditable(!isEditable)}}
        >
          Edit
        </button>
        <button 
          type="button" 
          onClick={()=>onDelete(id)}
        >
          Delete
        </button>
      </div>
      {isEditable && createPortal(
        <Modal onClose={()=>setIsEditable(false)}>
          <EditArticle 
            title={title} 
            text={text} 
            id={id} 
            onEdit={onEdit} 
            onClose={() => setIsEditable(false)} />
        </Modal>, document.body)}
    </article>
  )
}