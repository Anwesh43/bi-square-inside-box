import {useStyle} from './hooks'


const Square = ({w, h, scale, i}) => {
    const {squareStyle} = useStyle(w, h, scale)
    return (<div style = {squareStyle(i)}>
            </div>)
}

const Box = ({w, h, scale}) => {
    const {staticBlockStyle} = useStyle(w, h, scale)
    return (<div style = {staticBlockStyle()}>
          </div>)
}
const BiSquareInsideBoxPresentational = ({w, h, scale, onClick}) => {
    return (<div onClick = {onClick}>
              {[0, 1].map(i => <Square w = {w} h = {h} scale = {scale} i = {i} key = {`square_${i}`}/>})}
              <Box w = {w} h = {h} scale = {scale}/>
          </div>)
}

export default BiSquareInsideBoxPresentational
