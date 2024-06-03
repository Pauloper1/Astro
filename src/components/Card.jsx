import React from 'react'

export const card = (props) => {
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    )
}
