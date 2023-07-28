interface TitleProps {
   title:string
}
const Title : React.FC<TitleProps>  = ({
title
}) =>{
    return <div 
    className=" text-center 
    font-bold 
    text-xl 
    bg-gradient-to-r 
    from-pink-600 to-orange-400
    flex
    justify-center
    items-center
    ">
      <div className="
      text-white
      m-3">
        {title}
      </div>
    </div>
}
export default Title ;