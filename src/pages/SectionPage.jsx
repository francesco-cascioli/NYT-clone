import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const API_KEY = "57DJbsOAuF5XYrJI589gh931ABK0wm17";

function SectionPage() {
  const { sectionName } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const res = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${API_KEY}`
        );
        setArticles(res.data.results);
      } catch (error) {
        console.error("Errore nel caricamento della sezione:", error);
      }
    };

    fetchSection();
  }, [sectionName]);

  return (
    <div className="page-content">
      <div className="section-container">
        <h2>Sezione: {sectionName}</h2>
        {articles.map((article) => (
          <NewsCard
            key={article.url}
            title={article.title}
            abstract={article.abstract}
            url={article.url}
            image={article.multimedia?.[0]?.url}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionPage;
