import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { News } from '../news/News';
import s from './list.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
  
  useEffect(() => {
    async function saekjaflokkafretta() {
      setLoading(true);
      setError(null);
      
      let json;

      try {
        const result = await fetch(apiUrl);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt fréttirnar');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    saekjaflokkafretta();
  }, []);   

  const headlines = [];
  for (let i = 0; i < data.length; i+=1){
    const news = {id: data[i].id, title: data[i].title, url: data[i].url};
    headlines.push(news);
  }

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  return (
    <section className={s.allnews}>
      {data && headlines.map((news, index) => (
      <div className={s.newsbox} key={index}>
        
        <div className={s.newsheadlines}>
          <News fjoldi={5} newsid={news.id}></News>
        </div>
        <p>
          <NavLink className={s.newslink} to={`/frett/${news.id}`}> Allar Fréttir</NavLink> 
        </p>
      </div>
      ))}
    </section>
  );
}
