import React, { useState, useEffect, useRef } from "react";
import "./FadeIn.scss";

function FadeIn(props) {
    const [isVisible,setIsVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => setIsVisible(e.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    },[]);
    return (
        <div
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeIn;
