import React from 'react';

var x=10;

function test(){

    x++;
    //alert('testfnction');
   // <button onClick={  ()=>{alert('welcome')}  }>Click Me</button>
    alert(x);
}
function Demo(){

    return(
        <div>
         
          <button onClick={  test }>Click Me</button>

        </div>
    )


    
}
export default Demo;

