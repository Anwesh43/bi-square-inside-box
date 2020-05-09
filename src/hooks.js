import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                var currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        },
        scale
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const fixedW = w / 3
    const fixedH = h / 8
    const color = '#4CAF50'
    const position = 'absolute'
    const border = `${Math.min(w, h) / 60}px solid ${color}`
    const background = color
    return {
        staticBlockStyle() {
            const width = `${fixedW}px`
            const height = `${fixedH}px`
            const left = `${w / 2 - fixedW / 2}px`
            const top = `${h / 2 - fixedH / 2}px`
            return {left, top, position, height, width, border}
        },
        squareStyle(i) {
            const sf = sinify(scale)
            const sfi = divideScale(sf, i, 2)
            const sj = 2 * i - 1
            const sw = h / 8
            const width = `${sw}px`
            const height = `${fixedH}px`
            const x = w / 2 + -sw + sw * i + (fixedW / 2 - sw) * sfi * sj
            const left = `${x}px`
            const top = `${h / 2 - fixedH / 2}px`
            return {position, left, top, width, height, background}
        }
    }
}
