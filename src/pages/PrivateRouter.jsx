import { Outlet } from "react-router-dom";

const PrivateRouter = () => {

    const isAuthenticated = true;

    return (

        isAuthenticated ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRouter;
