import React from 'react'
import classes from './scss/Home.module.scss'
import Navbar from './components/Navbar'
import Body from './components/Body'


export default function Main() {
    return (
        <div className={classes.body}>
            <Navbar/>
            <Body/>
        </div>
    )
}
