import { useState } from "react";

function LikesPages () {

    const [likes, setLikesNumber] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
   
    const handleOnClick = () => {
  
        if (likes < 5) {
        setLikesNumber(likes + 1);
    
        } else {
            setDisplayMessage(true);
        }   
    };

    const handleCloseMessage = () => {
        setDisplayMessage(false);
      };

    return (
        <main>

          
            <button onClick={handleOnClick} >Like</button>
            <p>Vous avez liké {likes} fois</p>
            {displayMessage && (
            <div>
                <p>Vous avez like plus de 5 fois</p>
                <button onClick={handleCloseMessage}>Fermer</button>
            </div>
            )}
        </main>
    )
}

export default LikesPages;