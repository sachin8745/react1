import React from 'react'
import classes from './scss/Logo.module.scss'

export default function Logo() {
    return (
        <div>
            <h1 className={classes.text}>Amazon</h1>
            <p className={classes.desc}>Get anything</p>
        </div>
    )
}
