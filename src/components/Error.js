import { useRouteError } from "react-router-dom";


const Error = () => {
  const err = useRouteError();
    return(
        <div className="bg-amber-600"> 
<h1 className=" font-bold  ">OOPS!!</h1>
<h2>Something went wrong</h2>
        </div>
    )
}

export default Error;