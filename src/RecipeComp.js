import React from 'react'
import './Recipe.css'
const RecipeComp = (props) => {
   
    
    return( 
    <div className="container">
        <div className="comp">
        
        <h1 style={{backgroundColor:"floralwhite"}}>Recipename:{props.title}</h1>
        <div className="imging">
        <div className="ingredient" style={{backgroundColor:"floralwhite"}}>
        <h4 style={{backgroundColor:"floralwhite"}}>ingredients:</h4>{props.ingredients}</div>
        <div><img src={props.image}/></div>
         </div>
         <div style={{backgroundColor:"floralwhite"}}>calories:{props.calories}</div>
         <div style={{backgroundColor:"floralwhite"}}><a href={props.url}>click here to get  how to cook</a></div>

         </div>
        
       
       

    </div>
       
        
    )

}
    


export default RecipeComp