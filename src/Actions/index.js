import axios from 'axios'
const API_KEY="e98d16505a1cbeb23fa882fbbb36bdbe";
const API_ID="205df13a"
const ROOT_URL="https://api.edamam.com/"
function RecepieInfo(data){
    console.log(data)
    let response= axios.get(`${ROOT_URL}search?q=${data.term}&app_id=${API_ID}&app_key=${API_KEY}`);
    console.log(response)
    return {
      type:"SELECTED_DATA",
      payload:response
   }


}
export default RecepieInfo