import {useState} from "react";

function ContactForm({onSubmitData}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitData(formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required/>

            <label htmlFor="message">Message:</label>
            <textarea
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm;