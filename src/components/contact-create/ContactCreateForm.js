import React, { useState } from "react";

const ContactCreateForm = () => {

    const [name, setName] = useState({ firstName: '', lastName: '' })
    const [info, setInfo] = useState({ phoneNumber: '', email: '', address: '' })
    const [profilePic, setProfilePic] = useState('')

    const handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

        return (
            <form onSubmit={handleFormSubmit}>
                <div>
                    <img src={profilePic} alt="Profile preview." />
                </div>
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={name.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={name.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={info.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={info.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={info.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={profilePic}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Contact</button>
                    </div>
                </div>
            </form>
        )
    
}

export default ContactCreateForm;