import React, {useState} from "react";
import "./Article.css";
import { createPortal } from 'react-dom';
import { Modal } from "../Modal/Modal";
import { EditArticle } from "../EditArticle/EditArticle";

export const Article = ({id, type, data, elements, onEdit, onDelete}) => {
  const [isEditable, setIsEditable] = useState(false);
  
  return (
    <article className="article">
      {Object.keys(elements).map(key => {
        if(key==="title") return <h3 className="article__title" >{data[key]}</h3>
        else return <div className="article__text">{data[key]}</div>
        })}
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
            type={type}
            data={data} 
            id={id} 
            onEdit={onEdit} 
            onClose={() => setIsEditable(false)} />
        </Modal>, document.body)}
    </article>
  )
}