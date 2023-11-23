function CocktailPage () {

    // Je déclare mon fetch qui va capturer le lien de l'api
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    // Response donne un temps d'attente jusqu'à ce que les données soit collectées
    .then(response => response.json())
    // Dès que les données sont récupérées elles sont ensuite affichées dans le console log
    .then(data => console.log(data))

    return (

        <p>Hola</p>
    )
}

export default CocktailPage