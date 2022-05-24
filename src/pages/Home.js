import { logout } from "../redux/userRedux";
import { useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  return (
    <div>
      <Head>{`Welcome ${user.username}`}</Head>
      <Button onClick={handleLogout}>LOGOUT</Button>
    </div>
  )
}

export default Home


const Button = styled.div`
  width: 100vw;
  height: 100vh;
  color:green;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://png.pngtree.com/background/20210714/original/pngtree-welcome-back-to-school-background-picture-image_1207865.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Head = styled.h3`
display: flex;
  align-items: center;
  justify-content: center;
`;