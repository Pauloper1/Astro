import React from 'react'

export const Card = ({item}) => {
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">{item.description}</p>
            </div>
        </div>
    )
}
