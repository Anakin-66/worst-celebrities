import Footer from "../components/Footer"
import Header from "../components/Header"
import SpeakerCard from "../components/SpeakerCard"

function TvSpeakersPages () {

    const shittyTvSpeakers = ["Laurent Ruquier ","Michel Drucker ","Thierry Ardisson ","Christophe Beaugrand "]

    return (
        <>
        <Header currentPage="tvspeakers" />
        {shittyTvSpeakers.map ((shittySpeakers) => {
            return (
                <SpeakerCard badTvSpeaker= {shittySpeakers} />
            )
        })}
        <Footer />
        </>
    )
}

export default TvSpeakersPages