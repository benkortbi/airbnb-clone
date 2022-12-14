import Gallery from './Gallery.jsx'
import Article from './../Ui/Article.jsx'
import Container from './../Ui/Container.jsx'
import IMAGES from './../Ui/Media.js'
import Card from './Card.jsx'
const articleData = {
  title: 'Online Experiences',
  desc: 'Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.',
}
const jobs = [
    {
      img: IMAGES.run,
      rating: '5.0',
      participants : '6',
      country: 'USA',
      details: 'Life lessons with Katie Zaferes',
      price: '$136',
    },
  {
      img: IMAGES.wed,
      rating: '5.0',
      participants : '30',
      country: 'USA',
      details: 'Learn wedding photography',
      price: '$125',
    },
  {
      img: IMAGES.bike,
      rating: '4.8',
      participants : '2',
      country: 'USA',
      details: 'Group Mountain Biking',
      price: '$136',
    },
    {
      img: IMAGES.cake,
      rating: '5.0',
      participants : '172',
      country: 'DZ',
      details: 'Making delicious Cakes',
      price: '$99',
    },
     {
      img: IMAGES.youga,
      rating: '4.6',
      participants : '82',
      country: 'FR',
      details: 'Remove negative power through Yoga',
      price: '$199',
    },
     {
      img: IMAGES.camp,
      rating: '5.0',
      participants : '61',
      country: 'EG',
      details: 'Explore Nature with Johnson',
      price: '$399',
    }
  ];
const Main = () => {
  return(
    <main className='w-full bg-main dark:bg-title py-8'>
    <Container>
    <Gallery />
    <Article title={articleData.title} desc={articleData.desc}/>
   <div className='scroller flex gap-2 overflow-x-scroll snap-mandatory mt-5 pb-3'>
   {jobs.map(job => {
     return(
     <Card pic={job.img} rate={job.rating} participant={job.participants} country={job.country} details={job.details} price={job.price}/>
     )
   })}
   </div>
    </Container>
    </main>
    )
}
export default Main;