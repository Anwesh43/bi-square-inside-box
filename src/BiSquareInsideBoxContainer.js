import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BiSquareInsideBoxPresentational from './BiSquareInsideBoxPresentational'
const BiSquareInsideBoxContainer = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    return <BiSquareInsideBoxPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
    </BiSquareInsideBoxPresentational>
}

export default BiSquareInsideBoxContainer
