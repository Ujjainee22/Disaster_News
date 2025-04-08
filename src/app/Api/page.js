"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/Api/dropdown.module.css";
import { formatDistanceToNow, parse } from 'date-fns';


const DisasterDropdown = () => {
  const searchParams = useSearchParams();
  const stateName = searchParams.get("place");
  const disasterName = searchParams.get("name");
  const dtbefore = searchParams.get("before");
  const dtaft = searchParams.get("after");

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      if (!disasterName) return;

      setLoading(true);

      try {
        const backendUrl = `/Api/news?disaster=${disasterName}&place=${stateName}&before=${dtbefore}&after=${dtaft}`;
        console.log("Fetching news from:", backendUrl);

        const response = await fetch(backendUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        const parser = new DOMParser();
        const xml = parser.parseFromString(data.xml, "application/xml");
        const items = xml.querySelectorAll("item");

        let newsArray = [];
        items.forEach((item) => {
          let title = item.querySelector("title")?.textContent;
          let link = item.querySelector("link")?.textContent;
          let pub_date = item.querySelector("pubDate")?.textContent;

          let rawdesc=item.querySelector("description")?.textContent;
          //let desc_nb= rawdesc.replace(/<[^>]*>?/gm, '');
          //let desc = desc_nb.replace("&nbsp;", " ")

          let desc = rawdesc.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ');

          newsArray.push({ title, link, pub_date, desc });
        });

        setNews(newsArray);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [disasterName, stateName]);

  return (
    <div className={styles.container}>
      <h1>Disaster News for {disasterName} in {stateName}</h1>

      {loading ? (
        <p>Loading news...</p>
      ) : news.length > 0 ? (
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <div key={index} className={styles.card}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <p>{item.desc}</p>
              <br/>
              <p className={styles.date}>{formatDistanceToNow(new Date(item.pub_date), { addSuffix: true })}
              </p>
             
            </div>
          ))}
        </div>
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default DisasterDropdown;
