const initialState={
    names:[]
}
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD':
            return {
            
               names:[...state.names,action.payload]

            }
            case 'DELETE':
               
                 return {
             names:state.names.filter((name,index)=>index!==action.id.index)
             
            }
            case 'EDIT':
                {
              const  names=state.names.map((name,index)=>{
                    if(index===action.id){
                        return action.payload
                        }
                    else return name
                    
                 })
                 return{
                     names:names
                 }
               
                }

            
            
            
          
            default:
                return state;

        
    }
}

export default Reducer;