//displaying the news 
"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/mapdata/dropdown.module.css"
import { formatDistanceToNow, parse } from 'date-fns';
import { useSearchParams } from "next/navigation";
import Nav from "@/app/components/header"
const Page = () => {

  const searchParams = useSearchParams();
  const stateName = searchParams.get("place");
  const disasterName = searchParams.get("name");
  const dtbefore = searchParams.get("before");
  const dtaft = searchParams.get("after");
console.log("Parameters recieved as ",stateName,disasterName,dtbefore,dtaft);
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
        console.log(response);
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
  }, [disasterName, stateName, dtbefore, dtaft]);


  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(news, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `news_${disasterName}_${stateName}.json`);
    document.body.appendChild(downloadAnchorNode); // required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };






  return (
    <>
    <Nav/> 
    <div className={styles.container}>
      <h1>Disaster News for {disasterName} in {stateName}</h1>

 {loading ? (
          <p>Loading news...</p>
        ) : news.length > 0 ? (
          <>
            {/* ✅ Added Download JSON Button */}
            <button onClick={handleDownload} style={{ marginBottom: "1rem" }}>
              Download News as JSON
            </button>

            <div className={styles.newsGrid}>
              {news.map((item, index) => (
                <div key={index} className={styles.card}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <p>{item.desc}</p>
                  <br />
                  <p className={styles.date}>
                    {formatDistanceToNow(new Date(item.pub_date), { addSuffix: true })}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No news available</p>
        )}
      </div>
    </>
  );
};


export default Page;
