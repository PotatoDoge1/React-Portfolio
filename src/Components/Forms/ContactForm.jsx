import { useState } from 'react';
import './formStyle.css';
import { validateEmail } from '../../Utils/validations';


function ContactForm() {

        //THEN I see a contact form with fields for a name, an email address, and a message
    const [inputName, setName] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputMessage, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Get the value and name of the input that triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'inputName'){
            setName(inputValue);
        } else if (inputType === 'inputEmail') {
            setEmail(inputValue);
        } else if (inputType === 'inputMessage') {
            setMessage(inputValue);
        } else {
            console.log('Error at ContactForm.jsx handleInputChange.')
        }

    }

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!inputName.trim() || !inputEmail.trim() || !inputMessage.trim()) {
            setErrorMessage("All fields in the form must be filled out.");
            return;
        }

        if (!validateEmail(inputEmail)){
            setErrorMessage('Email is not valid.');
            return;
        }
        alert("Form successful, but not submitted... I don't have a backend set up yet.");

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    }


    return (
        <div>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={inputName}
                    name="inputName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={inputEmail}
                    name="inputEmail"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <input
                    value={inputMessage}
                    name="inputMessage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your message here."
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
            </div>
            )}
        </div>
    )
}

export default ContactForm;
