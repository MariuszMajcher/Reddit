import './Article.css'


const Article = ({title, author, likes, text, permalink, ups, image}) => {
    const extensions = ['jpg', 'jpeg', 'png', 'gif']
    const url_end = image.split('.').pop()
    console.log(url_end)
    const has_image = extensions.includes(url_end)
  return (
    <div className='article' onClick={() => window.location.href=`https://www.reddit.com${permalink}`}>
        <h1 className="colored">{title}</h1>
        {has_image && <img src={image} alt={title}/>}
        <div className="article_footer">
            <h5>Author: {author}</h5>
            <h5>Upvotes: {ups}</h5>
        </div>
    </div>
  )
}












export default Article