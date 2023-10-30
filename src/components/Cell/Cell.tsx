import React, { useState } from 'react';
import './Cell.css';

interface CellProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ hasItem, clicked, onClick }) => {
    const [cellClass, setCellClass] = useState('cell');

    const handleCellClick = () => {
        if (hasItem && !clicked) {
            setCellClass('cell clicked');
        }
        onClick();
    };

    return (
        <div
            className={`${cellClass} ${clicked ? 'clicked' : ''}`}
            onClick={handleCellClick}
        >
            {clicked && hasItem ? 'O' : ''}
        </div>
    );
};

export default Cell;
