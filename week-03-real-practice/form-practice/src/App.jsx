import { useState, useEffect } from "react";
import ContactForm from './components/ContactForm.jsx';
import MessagesDisplay from './components/MessagesDisplay.jsx';
function App() {
    const [messages, setMessages] = useState([]);
    const handleFormSubmit = (data) => {
        const message = { ...data, id: messages.length + 1, date: new Date().toDateString() };
        setMessages((prevMessages) => [...prevMessages, message]);
    }
    useEffect(() => {
        console.log(messages);
    }, [messages]);
    return (
        <>
            <ContactForm onSubmitData={handleFormSubmit}/>
            {messages.length > 0 &&
                <div className='messages-section'>
                    <h1>Last messages: </h1>
                    <MessagesDisplay data={messages} />
                </div>}
        </>
      )
}

export default App
