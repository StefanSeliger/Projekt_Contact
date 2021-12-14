const ContactItems = (props) => {
    return (  
        <article className="contactItems">
            <img src={props.pictureUrl} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.popularity}</p>
            <button>Delete</button>
        </article>
    );
}
 
export default ContactItems;