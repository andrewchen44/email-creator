import React from "react";  

const OutputEmail = (props) => {
   return <div className="output_email">
       <div> Output Email</div>
       <div className='output_text'>{props.text}</div>
     </div>;
};

export default OutputEmail;
