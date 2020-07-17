import React, { Component } from 'react';
import './Square.css';

function Square(props){

        return(
            <div>
                <button className = "square"
                onClick = {()=> props.onClick()}>
                    {props.value}
                    </button>
               
            </div>
    )
}


export default Square;