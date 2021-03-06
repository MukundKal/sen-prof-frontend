import {GET_STATS} from './types'

export function getStat(token){
    return dispatch =>{
        fetch("https://sen-react.herokuapp.com/getStats", { 
      
                // Adding method type 
                method: "POST", 
                
                // Adding body or contents to send 
                body: JSON.stringify({ 
                proftoken:token
                }), 
                
                // Adding headers to the request 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                } 
            }) 
            .then(response => response.json())

            .then(json=>{
                dispatch({
                    type:GET_STATS,
                    payload:{
                        data : json
                    }
                })
            })
            .catch(e=>console.log(e))
    }
}
