import React, { useState } from 'react';
const AddCategories = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");


     const onInputChange = (e)=>{
         setInputValue(e.target.value);
          
     }
     const onSubmit = (e)=>{
          e.preventDefault();
          if(inputValue.trim() === ""){
             return console.log("busca un gif");
          }
           setCategories(inputValue.trim());
          setInputValue("");
     }
    return ( 
        <>
         <form onSubmit={onSubmit}>
            <input 
            type={"text"}
            placeholder="buscar gifs"
            onChange={onInputChange}
            value={inputValue}
            />
         </form>
        </>
     );
}
 
export default AddCategories;