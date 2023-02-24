
const Screen = (props) => {
    return (
        <div className="ScreenContainer">
            <div>
                <span >
                    Score
                </span>
                <span className="ScoreContainer"
                    title="score">
                    {props.score}
                </span>
            </div>
            <div>
                <span>
                    High Score
                </span>
                <span className="ScoreContainer"
                    title="High score">
                    {props.highScore}
                </span>
            </div>

        </div>
    )
}

export default Screen;