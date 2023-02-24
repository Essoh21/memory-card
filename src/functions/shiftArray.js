export default function shiftArray(arrayOfObject) {
    return arrayOfObject.sort(() => Math.random() - 0.5)
}