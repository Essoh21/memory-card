import Card from "./Card";
import images from "../imagesSrcs";
import shiftArray from "../functions/shiftArray";
import extractArrayOfLengthfrom from "../functions/extractArrayOfLengthFrom";
import { useState, useEffect } from "react";
import Screen from "./Screen";
import Welcome from "./Welcome";

export default function App() {
    const img = extractArrayOfLengthfrom(21, images);
    const [arrayToUse, setArrayToUse] = useState(img);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    useEffect(() => {
        const savedHighScore = localStorage.getItem("highScore");
        if (savedHighScore) { setHighScore(JSON.parse(savedHighScore)) }
    }, [])
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("highScore", JSON.stringify(score));
        }
    }, [score, highScore]);
    const handleClick = (id) => {
        if (!clickedCards.includes(id)) {
            setClickedCards([...clickedCards, id]);
            setScore((score) => score + 1);
        } else {
            setScore(0);
            setClickedCards([]);
        }
        setArrayToUse(shiftArray(JSON.parse(JSON.stringify(img))));
    };

    const text = `     Welcome to memory card game
  Chose the number of images you think able of memorizing    `

    return (
        <>
            <Welcome text={text} />
            <Screen score={score} highScore={highScore} />
            <div className="CardsContainer">
                {arrayToUse.map((image) => (
                    <Card key={image.id}
                        src={image.src}
                        title={image.title}
                        handleClick={() => handleClick(image.id)}
                    />
                ))}
            </div>
        </>
    )
}
