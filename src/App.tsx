import { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';

import GameOverMessage from './components/GameOverMessage/GameOverMessage';
import ResetButton from './components/ResetButton/ResetButton';
import AttemptCounter from './components/AttemptCounter/AttemptCounter';


function createItems() {
    const items = [];
    const ringIndex = Math.floor(Math.random() * 36);

    for (let i = 0; i < 36; i++) {
        items.push({ hasItem: i === ringIndex, clicked: false });
    }

    return items;
}

function App() {
    const [items, setItems] = useState(createItems());
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const resetGame = () => {
        const newItems = createItems();
        setItems(newItems);
        setAttempts(0);
        setGameOver(false);
    };

    const handleCellClick = (index: number) => {
        if (!items[index].clicked) {
            setAttempts(attempts + 1);
            const newItems = [...items];
            newItems[index].clicked = true;
            setItems(newItems);

            if (items[index].hasItem) {
                setGameOver(true);
            }
        }
    };

    return (
        <div className="App">
            <h1>Найди кольцо</h1>
            {gameOver ? (
                <GameOverMessage attempts={attempts} onReset={resetGame} />
            ) : (
                <>
                    <Grid items={items} onCellClick={handleCellClick} />
                    <ResetButton onReset={resetGame} />
                    <AttemptCounter attempts={attempts} />
                </>
            )}
        </div>
    );
}

export default App;