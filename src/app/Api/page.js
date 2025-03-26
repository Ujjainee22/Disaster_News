"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const DisasterDropdown = () => {
  const searchParams = useSearchParams();
  const stateName = searchParams.get("place"); // Extract state name from URL
  const disasterName = searchParams.get("name");

  const [news, setNews] = useState([]); // Store news articles
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchNews = async () => {
      if (!disasterName) return; // Stop if no disaster selected

      setLoading(true); // Show loading state

      try {
        const backendUrl = `/Api/news?disaster=${disasterName}&place=${stateName}`;
        console.log("Fetching news from:", backendUrl);

        const response = await fetch(backendUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        // Parse RSS XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.xml, "application/xml");
        const items = xml.querySelectorAll("item");

        let newsArray = [];
        items.forEach((item) => {
          let title = item.querySelector("title")?.textContent;
          let link = item.querySelector("link")?.textContent;
          let pub_date = item.querySelector("pubDate")?.textContent;
          newsArray.push({ title, link, pub_date });
        });

        setNews(newsArray);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false); // Hide loading state
      }
    };

    fetchNews();
  }, [disasterName, stateName]); // Runs when disasterName or stateName changes

  return (
    <div>
      <div className="container">
        <h1>Disaster News for {disasterName} in {stateName}</h1>

        {loading ? (
          <p>Loading news...</p>
        ) : news.length > 0 ? (
          <ul>
            {news.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                <p>{item.pub_date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No news available</p>
        )}
      </div>
    </div>
  );
};

export default DisasterDropdown;