import { useState } from "react";

function LikesPages () {
    // Je déclare mon hook React useState et je le déclare à 0 par défaut. Je déclare ensuite ma variable et ma fonction
    const [likes, setLikesNumber] = useState(0);
    // Je déclare une fonction qui est lié à l'eventListener fournis par React pour le lié au onClick
    const handleOnClick = () => {
    // Je récupère ma fonction setLikesNumber et je l'auto incrèmente à ma variable pour que à chaque cliques ma variable fasse +1.
        setLikesNumber(likes + 1);
    }

    return (
        <main>
            {/* Je déclare l'eventListener onClick dans le buton, une fonction qui est fournis par REACT et qui est propre à REACT */}
            <button onClick={handleOnClick} >Like</button>
            {/* Pour finir je met ma variable qui sera mis à jour à chaque clique */}
            <p>Vous avez liké {likes} fois</p>
        </main>
    )
}

export default LikesPages;