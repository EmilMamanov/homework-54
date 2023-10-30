import React from 'react';
import './ResetButton.css';

interface ResetButtonProps {
    onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
    return (
        <button className="ResetButton" onClick={onClick}>Заново</button>
    );
}

export default ResetButton;