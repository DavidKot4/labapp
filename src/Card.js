import React from 'react';

export default function Card({title, text, buttonText}){
    return(
        
        <div className="card">
            <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{text}</p>
            <a href="#" class="btn btn-primary">{buttonText}</a>
            </div>
        </div>

    );

};