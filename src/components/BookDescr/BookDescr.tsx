import {FC} from 'react'
import classes from './bookDescr.module.scss'

const BookDescr: FC = (props) => {
    return (
        <section className={classes.bookdescr}>
            <div className={classes.bookdescr__cover}>
                <img src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" alt="book cover" />
            </div>
            <div className={classes.bookdescr__text}>
                <ul className={classes.bookdescr__text_list}>
                    <li className={classes.bookdescr__text_genre}>Biography</li>
                    <li className={classes.bookdescr__text_title}>Title more more words in title</li>
                    <li className={classes.bookdescr__text_author}>Author Lebzek Marber</li>
                </ul>
                <div className={classes.bookdescr__text_info}>
                    asdasdasd
                </div>
            </div>
        </section>
    )
}

export default BookDescr