import { AiFillStar } from "react-icons/ai"
const Card = (props) => {
  return(
    <div className='card min-w-[145px] relative flex flex-col gap-1 rounded-lg p-1 snap-center relative'>
    <img className='rounded-lg object-cover w-full h-36' src={props.pic} alt='Nof' />
    <div className='info'>
    <div className='rating flex gap-1 items-center'>
    <AiFillStar color='crimson' size='1.25rem'/>
    <span className='font-bold text-title text-sm dark:text-main'>{props.rate}</span>
    <span className='font-light text-subTitle dark:text-gray text-sm'>({props.participant})</span> . 
    <span className='font-light text-subTitl dark:text-gray text-sm'>{props.country}</span>
    </div>
    <p className='dtls text-sm text-title tracking-tight my-2 dark:text-main'>{props.details}</p>
    <p className='text-subTitle font-light text-sm dark:text-gray'><span className='text-title font-bold text-sm dark:text-main'>from {props.price} /</span> person</p>
    </div>
    </div>
    )
}
export default Card;