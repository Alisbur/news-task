import { useState, useEffect } from "react";
import { TEXT_LENGTHS } from "../shared/constants/textlengths";

export function useLocalStorage(key) {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    getAllNewsFromLocalStorage(key);
  }, [])

  const addItem = (data) => {
    const newsItems = [{
      id: Date.now(), 
      ...data}, ...news]
    localStorage.setItem(key, JSON.stringify(newsItems));
    setNews(newsItems);
  }

  const deleteItem = (id) => {
    const newsItems = news.filter(item=>item.id !== id);
    if(!newsItems.length) {
      setNews([]);
      localStorage.removeItem(key);
    }
    else {
      localStorage.setItem(key, JSON.stringify(newsItems));
      setNews(newsItems);
    }
  }

  const editItem = (id, data) => {
    const newsItems = news.map(item=>{
      return item.id === id 
        ? {
            id,
            ...data,
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