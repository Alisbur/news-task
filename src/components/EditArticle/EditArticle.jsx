import React, {useState} from "react";
import "./EditArticle.css";
import { fields } from "../../shared/constants/fields";

export const EditArticle = ({id, type, data, onEdit, onClose}) => {

  const [itemData, setItemData] = useState(data);

  const submit = (e) => {
    e.preventDefault();
    onEdit(id, itemData);
    onClose();
  }

  return (
    <form className="editArticle" onSubmit={submit} >
      <h2 className="editArticle__title">Редактирование</h2>
        {Object.keys(data).map((key) => key!=="id" && (
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
      <div className="editArticle__controls">
        <button 
          type="submit"
          // disabled={!itemText || !itemTitle || (itemTitle === title && itemText === text)}
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