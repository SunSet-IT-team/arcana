import React, {useState} from 'react';
import './styles.scss';

const Button = ({text, className, onClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (event) => {
        setIsHovered(true);
        const button = event.currentTarget;
        const round = button.querySelector('.button__span');

        const buttonX = event.clientX - button.getBoundingClientRect().left;
        const buttonY = event.clientY - button.getBoundingClientRect().top;

        if (buttonY < 24) {
            round.style.top = 0 + 'px';
        } else if (buttonY > 30) {
            round.style.top = 48 + 'px';
        }

        round.style.left = buttonX + 'px';
        round.style.width = '1px';
        round.style.height = '1px';
    };

    const handleMouseLeave = (event) => {
        setIsHovered(false);
        const button = event.currentTarget;
        const round = button.querySelector('.button__span');

        const buttonX = event.clientX - button.getBoundingClientRect().left;
        const buttonY = event.clientY - button.getBoundingClientRect().top;

        if (buttonY < 24) {
            round.style.top = 0 + 'px';
        } else if (buttonY > 30) {
            round.style.top = 48 + 'px';
        }
        round.style.left = buttonX + 'px';
    };

    return (
        <button
            className={`button ${isHovered ? 'animate' : ''} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick} //added
        >
            <span className="button__text">{text}</span>
            <span className="button__span" />
        </button>
    );
};

export default Button;
