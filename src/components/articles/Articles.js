import { useSelector } from "react-redux";
import { selectAllSearched } from "../search/searchedSlice";
import Article from "./Article";
import './Articles.css'


const Articles = () => {
    const articles = useSelector(selectAllSearched)
    const allArticlesArray = articles.map(article => 
        <Article 
            title={article.title} 
            author={article.author}
            likes={article.likes}
            ups={article.ups}
            image={article.image}
            permalink={article.permalink}/> )
  return (
    <div className="container_articles">{allArticlesArray}</div>
  )
}

export default Articles