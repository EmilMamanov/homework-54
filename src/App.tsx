import { useState } from 'react';
import './App.css';
import Grid from './Grid';

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

    const resetGame = () => {
        const newItems = createItems();
        setItems(newItems);
        setAttempts(0);
    };

    const handleCellClick = (index: number) => {
        if (!items[index].clicked) {
            setAttempts(attempts + 1);
            const newItems = [...items];
            newItems[index].clicked = true;
            setItems(newItems);
        }
    };

    return (
        <div className="App">
            <h1>Найди кольцо</h1>
            <Grid items={items} onCellClick={handleCellClick} />
            <p>Попытки: {attempts}</p>
            <button onClick={resetGame}>Заново</button>
        </div>
    );
}

export default App;