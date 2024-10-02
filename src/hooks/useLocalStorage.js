import { useState, useEffect } from "react";

export function useLocalStorage(key) {

  const [news, setNews] = useState([]);

  useEffect(()=>{
    getAllNewsFromLocalStorage(key);
  }, [])

  const addItem = (title, text) => {
    const newsItems = [{id: Date.now(), title, text}, ...news]
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
    const newsItems = news.map(item=>{return item.id === id ? {id, title: title.trim(), text: text.trim()} : item});
    localStorage.setItem(key, JSON.stringify(newsItems));
    setNews(newsItems);
  }

  const getAllNewsFromLocalStorage = () => {
    const news = JSON.parse(localStorage.getItem(key)) || [];
    setNews(news);
  }

  return {news, addItem, deleteItem, editItem};
}