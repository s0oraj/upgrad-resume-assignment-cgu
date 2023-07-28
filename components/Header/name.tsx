interface NameProps {
    firstName:string,
    lastName:string
}
const Name : React.FC<NameProps>  = ({
firstName,lastName
}) =>{
    return <h1 className=" text-center font-bold text-3xl mt-10">
    {firstName}{" "}{lastName}
  </h1>
}
export default Name ;