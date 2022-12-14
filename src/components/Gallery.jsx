import IMAGES from './../Ui/Media.js'
const Gallery = () => {
  return(
    <div className='w-full'>
    <div className='grid gap-1 grid-rows-9 grid-cols-5 w-full h-52 sm:h-60 mb-8'>
    <figure className="relative col-start-1 col-end-1 row-start-3 row-end-7">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img1} alt='nature'/>
        </figure>
        <figure className="col-start-2 col-end-2 row-start-1 row-end-4">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img2} alt='nature'/>
        </figure>
        <figure className="row-start-4 col-start-2 row-end-8 col-end-2">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img3} alt='nature'/>
        </figure>
        <figure className="col-start-3 col-end-3 row-start-2 row-end-5">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img4} alt='nature'/>
        </figure>
        <figure className="col-start-3 col-end-3 row-start-5 row-end-10">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img5} alt='nature'/>
        </figure>
        <figure className="col-start-4 col-end-4 row-start-1 row-end-6">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img6} alt='nature'/>
        </figure>
        <figure className="col-start-4 col-end-4 row-start-6 row-end-9">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img7} alt='nature'/>
        </figure>
        <figure className="rounded-lg col-start-5 col-end-5 row-start-2 row-end-5">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img8} alt='nature'/>
        </figure>
        <figure className="col-start-5 col-end-5 row-start-5 row-end-10">
          <img className='rounded-lg object-cover w-full h-full' src={IMAGES.img9} alt='nature'/>
        </figure>
    </div>
    </div>
    )
}
export default Gallery;