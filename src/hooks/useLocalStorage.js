import { useState, useEffect } from "react";
import { TEXT_LENGTHS } from "../shared/constants/textlengths";

export function useLocalStorage(key) {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    getAllNewsFromLocalStorage(key);
  }, [])

  const addItem = (title, text) => {
    const newsItems = [{
      id: Date.now(), 
      title: title.trim().slice(0,TEXT_LENGTHS.title), 
      text: text.trim().slice(0,TEXT_LENGTHS.text)}, ...news]
    localStorage.setItem(key, JSON.stringify(newsItems));
    setNews(newsItems);
  }

  const deleteItem = (id) => {
    const newsItems = news.filter(item=>item.id !== id);
    if(!newsItems.length) {
      setNews([]);
      localStorage.clear();
    }
    else {
      localStorage.setItem(key, JSON.stringify(newsItems));
      setNews(newsItems);
    }
  }

  const editItem = (id, title, text) => {
    const newsItems = news.map(item=>{
      return item.id === id 
        ? {
            id, 
            title: title.trim().slice(0,TEXT_LENGTHS.title), 
            text: text.trim().slice(0,TEXT_LENGTHS.text)
          } 
        : item});
    localStorage.setItem(key, JSON.stringify(newsItems));
    setNews(newsItems);
  }

  const getAllNewsFromLocalStorage = () => {
    const news = JSON.parse(localStorage.getItem(key)) || [];
    setNews(news);
  }

  return {news, addItem, deleteItem, editItem};
}