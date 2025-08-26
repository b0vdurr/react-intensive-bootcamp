function MessagesDisplay({data}) {
    return(
        <ul>
            {data.map((message, index) => (
                <li key={index}>
                    <span><strong>Author: </strong>{message.name}</span>
                    <span><strong>Email: </strong>{message.email}</span>
                    <span><strong>Message: </strong>{message.message}</span>
                    <span><strong>Date: </strong>{message.date}</span>
                </li>
            ))}
        </ul>
    )
}

export default MessagesDisplay;