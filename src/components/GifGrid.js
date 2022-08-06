import React from 'react';
import PropTypes from "prop-types";
import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

    

const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category);

    console.log(isLoading) 
    return ( 
       <>
          <h1>{category}</h1>
           
           {
               isLoading && <h2>cargando..</h2> 
           }
            
            <div className='card-grid'>
               {images.map(img=>{
                return  <GifItem key={img.id} {...img}/>
               })}
            </div>
            
       </>
     );
}
 



GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;


