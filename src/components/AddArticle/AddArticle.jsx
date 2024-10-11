import React, {useState} from "react";
import "./AddArticle.css";
import { fields } from "../../shared/constants/fields";

export const AddArticle = ({type, onAdd, onClose}) => {

  const [itemData, setItemData] = useState({});
  // const [itemText, setItemText] = useState("");
  // const [itemTitle, setItemTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd(itemData);
    onClose();
  }

  return (
    <form className="addArticle" onSubmit={submit} >
      <h2 className="addArticle__title">Дабавление новости</h2>
      {Object.keys(fields[type]).map((key) => (
          <fieldset className="editArticle__fieldset">
            <label className="editArticle__hint">{fields[type][key]}</label>
            <input
              type="text" 
              className="editArticle__titleInput" 
              value={itemData[key]}
              onChange={(e)=>setItemData({...itemData, [key]: e.target.value})} 
          />
          </fieldset>
        ))}

{/* 

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
      </fieldset> */}
      <div className="addArticle__controls">
        <button 
          type="submit"
          // disabled={!itemText || !itemTitle}
        >Save
        </button>
        <button 
          type="button" 
          onClick={()=>{onClose()}}
        >Cancel
        </button>
      </div>
    </form>
  )
}