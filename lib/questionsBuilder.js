export default function QuestionsBuilder({ type, body, name }){
    if(type == "short")
        if(body == "email")
            return(
            <>
                <p>{body}</p>
                <input type="email" placeholder="Tu respuesta" name={name} required />
            </>
            )
        else
            return(
                <>
                    <p>{body}</p>
                    <input type="text" placeholder="Tu respuesta" name={name} required />
                </>
            )
    else if(type == "text")
        return(
            <>
                <p>{body}</p>
                <textarea placeholder="Tu respuesta" name={name} />
            </>
        )
}