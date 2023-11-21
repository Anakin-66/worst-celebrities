import CelebrityDetails from "../components/CelebrityDetails";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/stuff";

function RandomCelebrity () {

    const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

    const randomCelebrity = shittyStars[randomIndex];


    return (
        <>
        <Header />
        <CelebrityDetails celebritiesInfos={randomCelebrity} />
        <Footer />
        </>
        
        
    )
}

export default RandomCelebrity;