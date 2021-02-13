import React from "react";

export const Button = (props: any) => {
    return <button className="btn btn-primary"
                   onClick={props.onClickHandler}>
                   {props.title}
           </button>
}