import React from 'react'
import Logo from './Logo'
import Link from './Link'
import classes from './scss/Navbar.module.scss'
import { useState } from 'react/cjs/react.development'

export default function Navbar() {
    let links_list = [
        {name: 'Home', id:1, endpoint: 'home'},
        {name: 'About', id:2, endpoint: 'about'}, 
        {name: 'Address', id:3, endpoint: 'address'}, 
        {name: 'Contact', id:4, endpoint: 'contact'}
    ];
    const [index, setIndex] = useState(1);
    return (
        <div className={classes.navbar}>
            <Logo/>
            <div>
            {links_list.map(val =>{
                return <Link key={val.id} currentIndex={val.id} index={index} setIndex={setIndex} name={val.name} endpoint={val.endpoint}/>
            })}
            </div>
        </div>
    )
}
