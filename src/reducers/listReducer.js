import { CONSTANTS } from "../actions";
let listID=4;
let cardID=5;
const initialState = [
    {
   
      title: "Last Episode",
      id:0,
      cards:[
        {
            id:0,
            text:"we created static list and static card"
        },
        {
            id:1,
            text:"we used mix between material Ui react and styled components"
        }
      ]
    
    },

    {
   
        title: "This Episode",
        id:1,
        cards:[
          {
              id:0,
              text:"we created our first reducer"
          },
          {
              id:1,
              text:"and render many cards on our list with static data  "
          },
          {
            id:2,
            text:"link tag for roboto font and icons"
          }
        ]
      
      },

      {
   
        title: "Next Episode",
        id:2,
        cards:[
          {
              id:0,
              text:"we created our first reducer"
          },
          {
              id:1,
              text:"and render many cards on our list with static data  "
          },
          {
            id:2,
            text:"link tag for roboto font and icons"
          }
        ]
      
      }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {

      case  CONSTANTS.ADD_LIST:
        const newList={
          title:action.payload,
          cards:[],
          id:listID
        }
        listID+=1
        return[...state,newList]


       case  CONSTANTS.ADD_CARD:
        const newCard={
          text:action.payload.text,
          
          id:cardID
        }
        cardID+=1;
        const newState=state.map(list =>{

             if(list.id === action.payload.listID){
               return{
                ...list,
                cards:[...list.cards,newCard]
               }
              }

              else{
                return list
              }

              
           });

           return newState;






      default:
            return state;

    }
        
};
export default listsReducer;