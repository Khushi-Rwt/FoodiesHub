import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h3>Oops Something went wrong!!</h3>
            <h2>{err.data}</h2>
        </div>
    )
}
export default Error;