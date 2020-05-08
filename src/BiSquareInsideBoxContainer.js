import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
const BiSquareInsideBoxContainer = ({}) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    return <BiSquareInsideBoxContainer w = {w} h = {h} scale = {scale} onClick = {start}>
    </BiSquareInsideBoxContainer>
}

export default BiSquareInsideBoxContainer
