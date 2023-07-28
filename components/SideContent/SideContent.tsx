interface SideContentProps {
    children:React.ReactNode
 }
 const SideContent : React.FC<SideContentProps>  = ({
 children
 }) =>{
     return <div className="flex flex-col w-[35%] ">
        {children}
        </div>
 }
 export default SideContent ;