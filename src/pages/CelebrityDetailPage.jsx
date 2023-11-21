import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { shittyStars } from "../utils/stuff";
import CelebrityDetails from "../components/CelebrityDetails";

function CelebrityDetailPage () {

    const { id } = useParams();

    const celebritiesFound = shittyStars.find((celebs) =>{
        return celebs.id == id
    })

    return (
        <>
        <Header />
        <CelebrityDetails celebritiesInfos={celebritiesFound} />
        <Footer />
        </>
    )
}

export default CelebrityDetailPage;