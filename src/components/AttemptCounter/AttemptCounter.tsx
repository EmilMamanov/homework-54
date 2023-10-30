import React from 'react';

interface AttemptCounterProps {
    attempts: number;
}

const AttemptCounter: React.FC<AttemptCounterProps> = ({ attempts }) => {
    return (
        <p>Количество попыток: {attempts}</p>
    );
}

export default AttemptCounter;