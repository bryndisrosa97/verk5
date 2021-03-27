import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './news.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ newsid, fjoldi }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
  const [link] = useState({
    url: '/',
    text: 'Til baka',
  });
  
  useEffect(() => {
    async function fetchfrettir() {
      setLoading(true);
      setError(null);

      let json;

      const url = `${apiUrl}${newsid}`
      
      try {
        const result = await fetch(url);
        if (!result.ok) {
          throw new Error('result not ok');
        }
        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt fréttir');
        return;
      } finally {
        setLoading(false);
      }
      setData(json);
    }
    fetchfrettir();
  }, [newsid]); 

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

  return(
    
    <section className={!fjoldi ? s.eachnews : null}>

      <div className={!fjoldi ? s.newsarticle : null}>

        {data && (
        <h2>
          { data.title }
        </h2>)
        }
        {data && data.items.slice(0, fjoldi).map((frett,index) => (

          <p className={s.newslinkur} key={index}>
            <a className="url" href={frett.link}>{ frett.title }</a>
          </p>
        ))}

      </div>

      {!fjoldi &&
        <p><NavLink className={s.backlink} to={link.url}> {link.text}</NavLink></p>
      }

    </section>
  );
  
}