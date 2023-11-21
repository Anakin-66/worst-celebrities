function CelebrityDetails ({celebritiesInfos}) {
    return (
        <>
        {celebritiesInfos && (
        <article>
            <h2> {celebritiesInfos.name} </h2>
            <p> {celebritiesInfos.bio} </p>
            <img src={celebritiesInfos.img} />
        </article>
       )}
       </>
    )
}

export default CelebrityDetails;