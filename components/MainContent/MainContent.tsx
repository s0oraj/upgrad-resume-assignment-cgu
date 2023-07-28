interface MainContentProps {
    children:React.ReactNode
 }
 const MainContent : React.FC<MainContentProps>  = ({
 children
 }) =>{
     return <div className="flex-1 flex-col mx-5 px-2">
        {children}
        </div>
 }
 export default MainContent ;