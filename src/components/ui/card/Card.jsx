import React from 'react'
import Styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={Styles.card}>
        {props.children}
    </div>
  )
}

export default Card