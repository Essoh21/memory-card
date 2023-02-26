import Card from "./Card";
const CardsContainer = (props) => {
    return (
        <div className="CardsContainer">
            {props.arrayToUse.map((image) => (
                <Card key={image.id}
                    src={image.src}
                    title={image.title}
                    handleClick={() => props.handleClick(image.id)}
                />
            ))}
        </div>
    )
}
export default CardsContainer;