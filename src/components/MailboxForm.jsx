import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MailboxForm = ({addBox}) => {
    const [formData, setFormData] = useState({
        boxholder: '',
        boxSize: 'Small',
    });
   
    const navigate = useNavigate()
    
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        setFormData();
        navigate('/mailboxes')
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Name of Boxholder:</label>
                <input
                    id="boxholder"
                    name="boxholder"
                    type="text"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <label htmlFor="boxsize">Box Size:</label> 
                <select 
                    name="boxsize"
                    id="boxsize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
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