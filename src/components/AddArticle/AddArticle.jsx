import React, {useState} from "react";
import "./AddArticle.css";

export const AddArticle = ({onAdd, onClose}) => {

  const [itemText, setItemText] = useState("");
  const [itemTitle, setItemTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd(itemTitle, itemText);
    onClose();
  }

  return (
    <form className="addArticle" onSubmit={submit} >
      <h2 className="addArticle__title">Дабавление новости</h2>
      <fieldset className="addArticle__fieldset">
        <label className="addArticle__hint">Название: </label>
        <input
          type="text" 
          className="addArticle__titleInput" 
          value={itemTitle}
          onChange={(e)=>setItemTitle(e.target.value)} 
        />
      </fieldset>
      <fieldset className="addArticle__fieldset">
        <label className="addArticle__hint">Текст: </label>
        <textarea 
          className="addArticle__textarea" 
          value={itemText} 
          onChange={(e)=>setItemText(e.target.value)} 
        />
      </fieldset>
      <div className="addArticle__controls">
        <button 
          type="submit"
          disabled={!itemText || !itemTitle}
        >Save
        </button>
        <button 
          type="button" 
          onClick={()=>{setItemText(onClose)}}
        >Cancel
        </button>
      </div>
    </form>
  )
}