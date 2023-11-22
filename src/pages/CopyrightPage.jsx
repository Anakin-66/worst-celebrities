import { useState } from "react";

function CopyrightPage () {

    // Honnêtement je sais pas l'expliquer pour le moment, je sais juste que c'est une fonction propre à REACT et que le composant sera true par défaut 
    const [displayText,setDisplayText] = useState(true);

    const handleButtonClick = () => {
        // A son click la valeur de displayText est changé
        setDisplayText(!displayText)
        console.log(displayText);
    }

    return (
        <main>
      {/* displayText me permet d'afficher ou non mon texte */}
        {displayText && <p>Bablablalalbalb</p>}

        <button onClick={handleButtonClick}>Cacher le texte</button>
        </main>
  );
}

export default CopyrightPage;