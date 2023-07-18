import React from "react";
import blogData from "../data/blog";


function Article({title, articleDate="January 1, 1970" , preview}){
    
    return (
    
        <div>
            <h3>{title}</h3>
            <small>{articleDate}</small>
            <p>{preview}</p>
        </div>
    )
}


export default Article