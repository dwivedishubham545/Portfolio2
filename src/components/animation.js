import React, { Component } from 'react';
import './animation.css'; // Import the CSS file

export default class AnimationComponent extends Component {
    componentDidMount() {
        const randomShape = document.createElement('div');
        randomShape.id = 'random-shape';
        randomShape.className = 'random-shape';
        document.body.appendChild(randomShape);

        document.addEventListener('mousemove', (event) => {
            const { clientX: x, clientY: y } = event;
            randomShape.style.left = `${x}px`;
            randomShape.style.top = `${y}px`;

            // Randomize the shape's size and color
            randomShape.style.width = `${Math.random() * 50 + 20}px`;
            randomShape.style.height = `${Math.random() * 50 + 20}px`;
            randomShape.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
        });

        document.addEventListener('click', (event) => {
            const { clientX: x, clientY: y } = event;
            randomShape.style.left = `${x}px`;
            randomShape.style.top = `${y}px`;

            // Add the fire effect class
            randomShape.classList.add('fire');

            // Remove the class after animation to reset
            setTimeout(() => {
                randomShape.classList.remove('fire');
            }, 1000); // Match with animation duration
        });
    }

    render() {
        return null; // No need to render anything here
    }
}
