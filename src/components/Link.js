import React from 'react'
import classes from './scss/Links.module.scss'


export default function Link({name, endpoint, index, setIndex, currentIndex}) {
    let style = (index===currentIndex) ? {borderBottomColor: '#FFF'}: {borderBottomColor: '#000'}
    return (
        <a style={style} href={`#${endpoint}`} onClick={()=>{ setIndex(currentIndex); console.log(currentIndex) }} className={classes.link}>{name}</a>
    )
}
