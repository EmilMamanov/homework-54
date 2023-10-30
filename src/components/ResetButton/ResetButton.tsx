import React from 'react';
import './ResetButton.css';

interface ResetButtonProps {
    onReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
        <button className="ResetButton" onClick={onReset}>Заново</button>
    );
}

export default ResetButton;