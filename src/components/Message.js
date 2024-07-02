import React from "react";
import "bulma/css/bulma.css"

function Message(props) {

  let classMessage = "message column is-one-third container";

  if (props.isInfo) classMessage += " is-info";

  return (
    <article class={classMessage}>
      <div class="message-header">
        <p>{props.title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {props.children}
      </div>
    </article>
  );
}

export default Message;