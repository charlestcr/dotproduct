import React,{Component} from 'react';
class Listitems extends Component{

    constructor(props){
       super(props);
       this.state={
           items:["apple","orange","pine apple","grapes","banana"],
           users:[
              {name:"tintu",age:29 },
              {name:"appu",age:28 },
              {name:"anu",age:30 }


           ]
       };
    }

//----------------------------------------------------------
    render(){
        var lis = this.state.items.map(function(itm,k){

        return<li key={k}>{itm}</li>
        })
      return(
        <div><ul>
            
            {lis}
            </ul>
             <hr/>
             <ul>
            {this.state.items.map(function(itm,k){

                 return<li key={k}>{itm}</li>
            })}</ul>
            <hr/>


           <ul>

        {this.state.items.map((itm,k)=><li key={k}>{itm}</li>)}
           </ul>
            <hr/>
           <table>
            <tr>
                <td>Name</td>
                <td>Age</td>
            </tr>
            {

                this.state.users.map((itm,k)=>{

                    return(

                        <tr>
                           <td>{itm.name}</td>
                           <td>{itm.age}</td>

                        </tr>
                    )
                })
            }

           </table>

        </div>
      );


    }

}
export default Listitems;