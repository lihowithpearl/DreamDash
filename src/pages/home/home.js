import {Routes,Route, useNavigate} from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        console.log("back clicked");
        navigate(-1);
    }
    return (
    <div class="home">
        <h1>Home</h1>
        <div>Welcome !!</div>
    </div>

    );
}

export default Home;