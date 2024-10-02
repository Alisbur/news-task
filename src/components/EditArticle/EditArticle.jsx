import React, {useState} from "react";
import "./EditArticle.css";

export const EditArticle = ({id, text, title, onEdit, onClose}) => {

  const [itemText, setItemText] = useState(text);
  const [itemTitle, setItemTitle] = useState(title);

  const submit = (e) => {
    e.preventDefault();
    onEdit(id, itemTitle, itemText);
    onClose();
  }

  return (
    <form className="editArticle" onSubmit={submit} >
      <h2 className="editArticle__title">Редактирование новости</h2>
      <fieldset className="editArticle__fieldset">
        <label className="editArticle__hint">Название: </label>
        <input
          type="text" 
          className="editArticle__titleInput" 
          value={itemTitle}
          onChange={(e)=>setItemTitle(e.target.value)} 
        />
      </fieldset>
      <fieldset className="editArticle__fieldset">
        <label className="editArticle__hint">Текст: </label>
        <textarea 
          className="editArticle__textarea" 
          value={itemText} 
          onChange={(e)=>setItemText(e.target.value)} 
        />
      </fieldset>
      <div className="editArticle__controls">
        <button 
          type="submit"
          disabled={!itemText || !itemTitle || (itemTitle === title && itemText === text)}
        >Save
        </button>
        <button 
          type="button" 
          onClick={()=>onClose()}
        >Cancel
        </button>
      </div>
    </form>
  )
}