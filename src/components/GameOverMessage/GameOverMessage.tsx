import React from 'react';
import ResetButton from '../ResetButton/ResetButton';
import './GameOverMessage.css';

interface GameOverMessageProps {
    attempts: number;
    onReset: () => void;
}

const GameOverMessage: React.FC<GameOverMessageProps> = ({ attempts, onReset }) => {
    return (
        <div className="game-over-message">
            <h2>Игра окончена!</h2>
            <p>Количество попыток: {attempts}</p>
            <ResetButton onReset={onReset} />
        </div>
    );
};

export default GameOverMessage;