import React from 'react'
import './Quote.scss';

function Quote() {
    return (
        <div className="quote">
            <blockquote className="quote-text">
            You know, farming looks mighty easy when your plow is a pencil, and you’re a thousand miles from the corn field.<br/>
                <p className="author"> Dwight D. Eisenhower</p>
            </blockquote>
        </div>
    )
}

export default Quote
