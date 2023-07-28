interface BoxProps {
    children:React.ReactNode,
    className?:string
 }
 const Box : React.FC<BoxProps>  = ({
 children,className
 }) =>{
     return <div className="flex mx-7 border-1  w-full ">
            
     <div className={`flex 
     flex-col 
     w-full
     p-3
        ${className}
     `}>
       {children}
       <div className=" h-2 bg-gradient-to-r 
 from-pink-600 to-orange-400"></div>
     </div>
   </div>
 }
 export default Box ;