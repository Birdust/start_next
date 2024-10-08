export default async function Read(props){
    const resp = await fetch('http://localhost:9999/topics/${props.params.id}')
    const topic = await resp.json();
    return(
        <>
            <h2>{topic.tile}</h2>
            {topic.body}
        </>
    )
}