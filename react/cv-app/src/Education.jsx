import { useState } from "react";

const Education = ({onAdd}) => {
    const [form, setForm] = useState({
        school: '',
        study: '', 
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({...form, id: crypto.randomUUID()});
        setForm({ school: '', study: '', date: '' });
    };

    return (
        <div>
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='school'
                    placeholder="School name"
                    value={form.school}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name='study'
                    placeholder="Course of study"
                    value={form.study}
                    onChange={handleChange}
                />

                <input 
                    type='text'
                    name='date'
                    placeholder="Date of Study"
                    value={form.date}
                    onChange={handleChange}
                />

                <button type="submit">Add</button>

            </form>
        </div>

    )
};

export default Education;