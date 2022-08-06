import React from 'react';


const GifItem = ({title,url}) => {
    console.log();
    return ( 
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
     );
}
 
export default GifItem;