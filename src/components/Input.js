const Input = (props) => {

    const style = {
        display: "flex",
        flexWrap: "none",
    }
    return (
        <div style={style}>
            <input
                type={props.inputType}
                name={props.inputName}
                style={props.inputStyle}
                onChange={props.handleChange}
                value={props.inputValue}
                max={props.max}
                min="4"
                placeholder="4 is default"
            />
            <button type="button" onClick={props.handlePlayGame}> Play game</button>
        </div>
    )
}

export default Input;