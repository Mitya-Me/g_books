import {FC} from 'react'
import classes from './book.module.scss'

type BookProps = {
    cover: string;
    category: string;
    title: string;
    author: string;
}


const Book: FC<BookProps> = ({cover, category, title, author}) => {

    return (
        <div className={classes.book}>
            <div className={classes.book__cover}>
                <img src={cover} />
            </div>
            <ul className={classes.book__description}>
                <div className={`${classes.book__description_item } ${classes.book__description_ctgry}`}> {category} </div> 
                <div className={`${classes.book__description_item } ${classes.book__description_title}`}> {title} </div> 
                <div className={classes.book__description_item}> {author} </div> 
            </ul>
        </div>            
    )
}

export default Book