import { useState } from "react";

const GeneralInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    return (
        <div>
            <h2>General Information</h2>
            <form>
                <div>
                    <input 
                        type='text'
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type='text'
                        placeholder="Phone Number"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                    />
                </div>
            </form>

            <div className="display-general-info">
                <h1><strong>{name}</strong></h1>
                <p>Email Address: {email}</p>
                <p>Phone Number: {phoneNo}</p>
            </div>
        </div>
    )
}

export default GeneralInfo;