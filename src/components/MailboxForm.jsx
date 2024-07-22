import { useState } from "react";

const initialState = {
    boxholder: "",
    boxSize: "Small" 
}
const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData(initialState)
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name of Boxholder:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="boxsize">Box Size:</label> 
                <select name="boxsize">
                    <option value="Small">Small</option>    
                    <option value="Medium">Medium</option>  
                    <option value="Large">Large</option>  
                </select>
                <button type="submit">Submit</button>   
            </form>
        </main>
    
    )
}
export default MailboxForm;