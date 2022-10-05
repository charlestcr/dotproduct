import React, { useState } from "react";
import TrelloCard from "./TrelloCard";
const TrelloList = ({ title, cards, listID, index, dispatch }) => {

    return(
        <div style={styles.container}>

           <h4>{title}</h4>
           {/**<TrelloCard/> **/}
           {cards.map(card =>
           
              <TrelloCard text={card.text} />
           
           )}


        </div>
        
    )
}

const styles={
    container:{
        backgroundColor:"#dfe3e6",
        borderRadius:3,
        width:300,
        padding:8,
        marginRight:8

    }
}
export default TrelloList;
