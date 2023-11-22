import { useState } from "react";

function FormMessagePage () {
    // Je déclare mon hook useState avec une variable message et une fonction setMessage, je met une chaîne de caractère vide qui sera mise à jour quand j'écrirais dans mon
    // input
    const [message, setMessage ] = useState("")

    const handleMessageChange = (event) => {
        // J'appel ma fonction setMessage et je capture l'élément avec sa valeur pour dire que value = message
        setMessage(event.target.value);
       
    }

    return (
        <form>
            <label>
                Message : 
                {/* Je déclare le type d'eventListener */}
            <input onChange={handleMessageChange} type="text" name="message" />
            </label>
            {/* Je termine par ma variable message qui est mise à jour à chaque caractère écris */}
            <p>Vous avez envoyé : {message} </p>
        </form>
    )
}

export default FormMessagePage