import axios from "axios";
import { useEffect, useState } from "react";
import './Beers.css'
import { useNavigate } from "react-router";

function Beers() {
    const [beers, setBeers] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const fetchBeers = async () => {
        const response = await axios.get(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`
        );
        setBeers((prevBeers) => [...prevBeers, ...response.data]);
        setPage(page + 1);
    };

    useEffect(() => {
        fetchBeers();
    }, []);
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return (
        <div className="main">
            <div >
                <h1 className="Title">Beers Hub</h1>
            </div>
            <div className="beer-list">
                {beers.map((beer) => (
                    <div key={beer.id} className="beer-card" style={{ backgroundColor: getRandomColor() }}>
                        <div className="beer-description">
                            <h3>{beer.name}</h3>
                            <h4>{beer.tagline}</h4>
                            <h5>{beer.description}</h5>
                        </div>
                        <div className="beer-image-container">
                            <img src={beer.image_url} alt={beer.name} className="beer-image" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
            <button onClick={fetchBeers}>Load More</button>
            <button onClick={() => navigate('/')}>Logout</button> 
            </div>
        </div>
    );
}

export default Beers;
