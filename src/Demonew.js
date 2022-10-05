import React,{Component} from 'react';
import counter from './Counter';
class Demonew extends Component{
 //<button onClick ={    ()=> {alert('clicked')}    }>Click</button>

constructor(props){
    super(props);
    this.state={
                counter:0,
                enable:false,
                textcontent:"nothing"
    };


}
//---------------------------------------------------------------------------
checkClicked=()=>{

//alert('CLICKED')
this.setState((prev,props)=>(
    {enable:!prev.enable}
))

}

//---------------------------------------------------------------------------

textchangeEvent = (e)=>{
  // console.log(e.target.value);
   this.setState({textcontent:e.target.value})




}

//--------------------------------------------------------------------
increment=()=>{

this.setState((prev,props)=>(
{counter:prev.counter+1}

)



)
//alert(123)

}
//---------------------------------------------------------------

decrement=()=>{

    this.setState((prev,props)=>(
    {counter:prev.counter-1}
    
    )
    
    
    
    )
    //alert(123)
    
    }
//-------------------------------------------------------------------
render(){
   return(<div>
     <button onClick ={     this.increment        }>+</button>
     <button onClick ={     this.decrement         }>-</button>
   <p>you have clicked {this.state.counter} times</p>
     <label>
         Enable
        <input type ="checkbox" onClick={this.checkClicked}/><br/>
        
     </label><br/>


     <input onChange={this.textchangeEvent} type="text"/>
   <h1>{this.state.textcontent}</h1>
   <p>It is {this.state.enable?"Enabled":"Disabled"}</p>
   <b>It is {this.state.enable?"Enabled":"Disabled"}</b>
   <u>It is {this.state.enable?"Enabled":"Disabled"}</u>
          </div>);     
    }

}
//----------------------------------------------------------------------------------
export default Demonew;