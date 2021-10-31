import { FC } from 'react'
import Books from '../Books/Books'
import BookDescr from '../BookDescr/BookDescr'
import classes from './contentSection.module.scss'

const ContentSection: FC = (props) => {
    return (
        <div className={classes.contentSection}>
            {/* <BookDescr/> */}
            <h3 className={classes.contentSection__title}> Found <span></span> results </h3>
            <Books />
        </div>
    )
}

export default ContentSection