import React from 'react';
import Cell from './Cell';
import './App.css';

interface GridProps {
    items: Array<{ hasItem: boolean; clicked: boolean }>;
    onCellClick: (index: number) => void;
}

const Grid: React.FC<GridProps> = ({ items, onCellClick }) => {
    return (
        <div className="grid">
            {items.map((item, index) => (
                <Cell
                    key={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </div>
    );
};

export default Grid;