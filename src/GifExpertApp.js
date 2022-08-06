import React, { useState } from 'react';
import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
       

    const onAddCategory = (category)=>{
       if(categories.includes(category)) return;
        setCategories([category,...categories]);
    }


    return ( 
       <>
         {/* titulo */}
          <h1>GifExpertApp</h1>
           
           
          {/* input */}
           <AddCategories setCategories={onAddCategory}/>
          {/* listado de gifs */}

             
            
               {categories.map(category=>{
                return <GifGrid key={crypto.randomUUID()} category={category}/>
               })}
           
             {/* gif item */}
       </>
     );
}
 
export default GifExpertApp;