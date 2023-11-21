import Footer from "../components/Footer";
import Header from "../components/Header";
import { shittyStars } from "../utils/stuff";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function HomePage () {

    const mostRecentStars = shittyStars.sort((a, b) => { 
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    })

    const choseByRedac = shittyStars.filter((chosen) => {
      return chosen.isPickedByTeam === true;
    })

    const lastThreeStars = choseByRedac.slice (-3);
    
    const { id } = useParams();

    const celebritiesFound = mostRecentStars.find((celebs) =>{
        return celebs.id == id
    })

    return (
      <>
      <Header />
        {mostRecentStars.map ((p) =>{
          return (
            <article>
              <h2> {p.name} </h2>
              <Link to={`/celebrities/${p.id}`}>
              <button>Click here</button>
              </Link>
            </article>
          );
        })}
        {lastThreeStars.map ((p) =>{
          return (
            <p> {p.name} a été choisi par la rédac</p>
          )
        })}
      <Footer />
      </>
    );
  }
  
  export default HomePage;
  