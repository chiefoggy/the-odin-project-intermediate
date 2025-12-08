import React, { useState } from "react";

const GeneralInfo = ({ data, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({...data, [name]:value})
    };
    return (
        <div className="card">
            <h2 className="card-title">General Information</h2>
            <form className="card-grid">
                <div className="form-group">
                    <input 
                        type='text'
                        name="name"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type='text'
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type='text'
                        name="phoneNo"
                        placeholder="Phone Number"
                        value={data.phoneNo}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type='text'
                        name="bio"
                        placeholder="Bio"
                        value={data.bio}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default GeneralInfo;