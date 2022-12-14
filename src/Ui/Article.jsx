const Article = (props) => {
  return(
    <article>
    <h2 className='text-2xl text-title font-semibold mb-1 dark:text-main'>{props.title}</h2>
    <p className='text-sm text-subTitle font-light leading-snug tracking-tight dark:text-gray'>{props.desc}</p>
    </article>
    )
} 
export default Article;