import {FC} from 'react'
import classes from './bookCard.module.scss'

type BookCardProps = {
    thumbnail: string;
    category: string[];
    title: string;
    author: string[];
}


const BookCard: FC<BookCardProps> = ({thumbnail, category, title, author}) => {

    return (
        <div className={classes.book}>
            <div className={classes.book__cover}>
                <img src={thumbnail} alt=''/>
            </div>
            <ul className={classes.book__description}>
                <li className={`${classes.book__description_item} ${classes.book__description_ctgry}`}>
                    {category ? category.join(' ') : 'category not specified'}
                </li> 
                <li className={`${classes.book__description_item } ${classes.book__description_title}`}> {title} </li> 
                <li className={classes.book__description_item}> {author ? author.join(', ') : 'author not specified'} </li> 
            </ul>
        </div>            
    )
}

export default BookCard