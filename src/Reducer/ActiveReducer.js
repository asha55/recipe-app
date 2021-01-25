export default function(state=[],action){
    console.log(action)
    
        switch(action.type){
            case "SELECTED_DATA" :
                console.log(action.payload.data.hits)
                return action.payload.data.hits

        }
        return state
        


}