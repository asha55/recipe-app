import React from 'react'
import {connect} from 'react-redux'
import RecipeComp from '../RecipeComp'
class DisplayData extends React.Component{
    
 render(){
    return(
        <div>
        <div style={{display:"flex",justifyContent:"space-between" ,flexWrap:"wrap"}}>
        
         {this.props.Recepie.map(
            (item) => {
                console.log(item)
                
                    return <RecipeComp 
                    key={item.recipe.label}
            
                    image={item.recipe.image}
                    title={item.recipe.label}
                    url={item.recipe.url}
                    ingredients={item.recipe.ingredients.map(
                        (content)=>{
                            return<li style={{backgroundColor:"floralwhite"}}>{content.text}</li>
                        }
                    )}
                    calories={item.recipe.calories}
                    />
                }
        )
       
       
    
    }
        
        </div>
        </div>

    )
 }
}
function mapStateToProps(ApplicationState){
    return {
    Recepie:ApplicationState.Recepie
    }
}
export default connect(mapStateToProps)(DisplayData)
