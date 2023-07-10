import React, { useState } from "react";
const App = () =>{
let newTime = new Date().toLocaleTimeString();
let newDate = new Date().toLocaleDateString();
const[ctime,setCtime] = useState(newTime,newDate);

const UpdateTime = () =>{

  newTime = new Date().toLocaleTimeString();
 newDate = new Date().toLocaleDateString();
setCtime(newTime);


};
setInterval(UpdateTime,1000);


  return(
    <>
<h1>

  {newDate}
  <hr/>
  {newTime}
</h1>
<button onClick={UpdateTime}>Get Time</button>
    </>
  );

} 
export default App;