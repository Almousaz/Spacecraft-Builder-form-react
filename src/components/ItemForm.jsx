import React, { useState } from "react";



const ItemForm = () => {

    const [formData , setFormData] = useState({
        name : "" ,
        quantity : "", 
        purpose : ""
    }) 

    const handleChange = e => {
        const {name , value} = e.target
        setFormData(data => ({
            ...data ,
            [name] : value 
        }))
    }




    return (
        <div>
            <form>
                <input name="name" type="text" id="name" placeholder="name" value={formData.name}   onChange={handleChange} />
                <input type="text" name="quantity" id="quantity" placeholder="quantity" value={formData.quantity} onChange={handleChange} />
                <input type="text" name="purpose" id="purpose" placeholder="purpose" value={formData.purpose} onChange={handleChange} />
                
            </form>
        </div>
    )
}

export default ItemForm