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
            id:0,
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
              id:0,
              text:"and render many cards on our list with static data  "
          },
          {
            id:1,
            text:"link tag for roboto font and icons"
          }
        ]
      
      },

      {
   
        title: "Next Episode",
        id:1,
        cards:[
          {
              id:0,
              text:"we created our first reducer"
          },
          {
              id:0,
              text:"and render many cards on our list with static data  "
          },
          {
            id:1,
            text:"link tag for roboto font and icons"
          }
        ]
      
      }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {




        default:
            return state;

    }
        
};
export default listsReducer;