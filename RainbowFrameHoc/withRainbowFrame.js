import React, { Fragment } from 'react';



  let  withRainbowFrame = (colors) => (Comp) => (props) => {
 
  function callBack(accumulator, elem){
    return(
     <div style={{border:"solid 2px "+elem,padding:"10px",textAlign:"center"}}>
      {accumulator}
     </div>
    )   
}

 let result =colors.reduce(callBack,<Comp {...props}></Comp>)
return (
   <Fragment>
   {result}
   </Fragment>
 
  );
};


// let withRainbowFrame = color => Comp => props =>
//     <div style={{backgroundColor:color,border:"solid red 1px"}}>
//       <Comp {...props} />
//     </div>
;

export { withRainbowFrame };
