import React, {useState} from "react";
import "./Article.css";

export const Article = ({id, title, text, onEdit, onDelete}) => {

  const [isEditable, setIsEditable] = useState(false);
  const [itemText, setItemText] = useState(text);
  const [itemTitle, setItemTitle] = useState(title);

  return (
    <article className="article">
      <h3 className="article__title" title={title}>{title}</h3>
      {isEditable && <input className="article__input" value={itemTitle} onChange={(e)=>setItemTitle(e.target.value)} disabled={!isEditable}/>}
      <div className="article__text">{text}</div>
      {isEditable && <textarea className="article__textarea" value={itemText} onChange={(e)=>setItemText(e.target.value)} disabled={!isEditable}/>}
      <div className="article__controls">
        {isEditable 
          ? <>
              <button 
                type="button"
                disabled={!itemText || !itemTitle || (text === itemText && title === itemTitle)}
                onClick={()=>{
                  onEdit(id, itemTitle, itemText); 
                  setIsEditable(false);
                }}>
                  Save
                </button>
              <button 
                type="button" 
                onClick={()=>{
                  setItemText(text); 
                  setIsEditable(false)
                }}>
                  Cancel
                </button>
            </>
          : <>
              <button 
                type="button" 
                onClick={()=>setIsEditable(!isEditable)}
              >
                Edit
              </button>
              <button 
                type="button" 
                onClick={()=>onDelete(id)}
              >
                Delete
              </button>
            </>
        }
      </div>
    </article>
  )
}