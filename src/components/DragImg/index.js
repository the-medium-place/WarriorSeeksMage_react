import React from 'react'
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"


export default function Index(props) {
    const x = useMotionValue(0)
    const background = useTransform(
      x,
      [-100, 0, 100],
      [ "#9b0300", "#00bbff","rgb(55, 255, 0)"]
    )

    const rotate = useTransform(
      x, 
      [-200, 0, 200],
      ["-7deg", "0deg", "7deg"]
    )
  
    return (
      <motion.div style={{ background }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, rotate }}
          onDragEnd={
            (event, info) => {
              if (info.offset.x < -150){
                console.log('moved left')
                window.location.reload()
              } else if (info.offset.x > 150) {
                console.log('moved right')
                window.location.reload()
              }
            }}
        >
          {props.image}
        </motion.div>
      </motion.div>
    )
}
