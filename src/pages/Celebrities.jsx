import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/stuff";

function Celebrities () {

    return (
        <>
        <Header />
        {shittyStars.map ((allStars) => {
            return (
                <Link to={`/details/${allStars.id}`}>
                <article>
                    <img src={allStars.img} />
                </article>
                </Link>
            );
        })}
        <Footer />
        </>
        
        
    )
}

export default Celebrities;