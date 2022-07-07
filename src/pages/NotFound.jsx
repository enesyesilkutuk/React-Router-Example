import errorImg from '../img/404.png';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div className="mt-4">
        <button className="btn btn-info me-2" onClick={() => navigate('/')}>Go Home</button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
