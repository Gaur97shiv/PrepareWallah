import React from "react";

function TextInput(props) {
  return (
    <div className="block w-full p-2 my-2">
      <input className="block w-full p-2 mt-4 bg-white" {...props} />
      {props.error && (
        <p>{props.errormessage}</p>
      )}
    </div>
  );
}

export default TextInput;
