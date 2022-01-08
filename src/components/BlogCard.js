import React from 'react'
import classes from './scss/BlogCard.module.scss'

export default function BlogCard({value}) {
    // let id = value.id;
    let title = value.title;
    let author = value.author;
    let content = value.content
    return (
        <div className={classes.main}>
            <h2>{title}</h2>
            <h6>{author}</h6>
            <p>{content}</p>
        </div>
    )
}
