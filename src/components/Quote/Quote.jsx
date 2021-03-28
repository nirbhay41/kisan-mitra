import React from 'react'
import './Quote.scss';

function Quote() {
    return (
        <div className="quote">
            <blockquote className="quote-text">
                I would rather be on my farm than be emperor of the world.<br/>
                <p className="author"> George Washington</p>
            </blockquote>
        </div>
    )
}

export default Quote
