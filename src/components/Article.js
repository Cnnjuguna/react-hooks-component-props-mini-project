import React from "react";




function Article({title, articleDate="January 1, 1970" , preview, minutes}){

    function getEmojis(emoji, time){
        const numOfEmojis = Math.ceil(time / (emoji === "☕️" ? 5 : 10));
        return emoji === "☕️" ? "☕️".repeat(numOfEmojis) : "☕️".repeat(numOfEmojis);
    };
    
    let emoji = "";
    if(minutes < 30){
        emoji = "☕";
    } else {
      emoji =  "🍱";
    }


    return (
    
        <div>
            <h3>{title}</h3>
            <small>
                {articleDate} 
                {getEmojis(minutes, String(emoji))} {minutes} min read
            </small>
            <p>{preview}</p>
        </div>
    )
}


export default Article