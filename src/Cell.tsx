import React from 'react';
import './App.css';

interface CellProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {
    return (
        <div
            className={`cell ${clicked ? 'clicked' : ''}`}
            onClick={() => onClick()}
        >
            {clicked && hasItem ? 'O' : ''}
        </div>
    );
};

export default Cell;