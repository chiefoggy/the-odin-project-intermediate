import { useState } from "react";

const PracticalExperience = ({ onAdd }) => {

    const [form, setForm] = useState({
        company: '',
        position: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...form, id: crypto.randomUUID() });

        setForm({
            company: '',
            position: '',
            responsibilities: '',
            startDate: '',
            endDate: '',
        });
    };

    return (
        <div className="card">
            <h2 className="card-title">Practical Experience</h2>

            <form onSubmit={handleSubmit} className="card-grid">

                <div className="form-group">
                    <label>Company Name</label>
                    <input 
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Position</label>
                    <input 
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={form.position}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Start Date</label>
                    <input 
                        type="date"
                        name="startDate"
                        value={form.startDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>End Date</label>
                    <input 
                        type="date"
                        name="endDate"
                        value={form.endDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group full-width">
                    <label>Responsibilities</label>
                    <input 
                        type="text"
                        name="responsibilities"
                        placeholder="Responsibilities"
                        value={form.responsibilities}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn full-width">
                    Add Experience
                </button>
            </form>
        </div>
    );
};

export default PracticalExperience;
