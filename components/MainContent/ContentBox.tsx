'use client'
import { useRouter } from "next/navigation";
import Box from "../SideContent/Box";

interface ContentBoxProps {
    heading? :string , 
    subheading?:string , 
    title?:string , 
    duration?:string , 
    location?:string ,
    description?:string,
    bulletpoints?:string[],
    href?:string
 }
 const ContentBox : React.FC<ContentBoxProps>  = ({
 title,description,duration,heading,
 location,subheading,bulletpoints,href
 }) =>{
    const router = useRouter();
     return <Box className="gap-5" >
            <h1 className="text-2xl 
            font-bold ">{heading}</h1>
            <div className=" flex justify-between ">
                <h2 className="font-bold text-lg">{subheading}</h2>
                <h3>{duration}</h3>
            </div>
            <div className=" flex justify-between ">
                <h2 className="font-bold text-base cursor-pointer" onClick={()=>{
                    if(href!== undefined)
                    router.push(href)}}>{title}</h2>
                <h3>{location}</h3>
            </div>

            <p className="leading-7">{description}</p>
            {
                bulletpoints && <ul className="list-disc mx-4">
                    {
                        bulletpoints.map((points,idx) => <li key={idx}>
                            {points}
                        </li>)
                    }
                </ul>
            }


     </Box>
 }
 export default ContentBox  ;