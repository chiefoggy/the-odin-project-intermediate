import React, { useState } from "react";

const GeneralInfo = ({ data, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({...data, [name]:value})
    };
    return (
        <div>
            <h2>General Information</h2>
            <form>
                <div>
                    <label>Full Name: </label>
                    <input 
                        type='text'
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Email: </label>
                    <input 
                        type='text'
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Phone Number: </label>
                    <input 
                        type='text'
                        name="phoneNo"
                        placeholder="Phone Number"
                        value={data.phoneNo}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default GeneralInfo;