
import images from "../imagesSrcs";
import shiftArray from "../functions/shiftArray";
import extractArrayOfLengthfrom from "../functions/extractArrayOfLengthFrom";
import { useState, useEffect } from "react";
import Screen from "./Screen";
import Welcome from "./Welcome";
import CardsContainer from "./CardsContainer";
import DisplayGame from "./DisplayGame";
import Input from "./Input";
import Exception from "./Exception";

export default function App() {
    const [numberOfImages, setNumberOfImages] = useState(4);
    const img = extractArrayOfLengthfrom(numberOfImages, images)
    const [arrayToUse, setArrayToUse] = useState(img);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [showGame, setShowGame] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [beatHighScore, setBeatHighScore] = useState(false);

    useEffect(() => {
        const savedHighScore = localStorage.getItem("highScore");
        if (savedHighScore) { setHighScore(JSON.parse(savedHighScore)) }
    }, [])
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            setBeatHighScore(true);
            localStorage.setItem("highScore", JSON.stringify(score));
        }
    }, [score, highScore]);

    useEffect(() => {
        if (score === numberOfImages) {
            setScore(0);
            setClickedCards([]);
            setGameStarted(false);
            setShowGame(false);
            setArrayToUse([]);
            setBeatHighScore(false);
            alert("Congratulations! You've won. increase the number of images ");
        }
    }, [score, numberOfImages]);
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

    const handlePlayGame = () => {
        setShowGame(!showGame);
        setGameStarted(!gameStarted);
        setArrayToUse(extractArrayOfLengthfrom(numberOfImages, images));
    }

    const handleChange = (e) => {
        setNumberOfImages(e.target.value);
    }

    const text = `  Welcome. Chose the number of images you think you are able to memorise and click Play Game to start. 
    `;
    const instructions = 'let see the number of images you can identify. Never click an image twice'
    return (
        <>
            {beatHighScore && <Exception text="you beat high score" />}
            <Welcome text={text} instructions={instructions} gameStarted={gameStarted} />
            <DisplayGame show={showGame}>
                <Screen score={score} highScore={highScore} />
                <CardsContainer arrayToUse={arrayToUse} handleClick={handleClick}
                />
            </DisplayGame>
            <DisplayGame show={!showGame}>
                <Input
                    inputType="number"
                    max="21"
                    handlePlayGame={handlePlayGame}
                    handleChange={handleChange}
                />
            </DisplayGame>
        </>
    )
}
