import { FC } from 'react'
import Books from '../Books/Books'
import classes from './contentSection.module.scss'

const ContentSection: FC = (props) => {
    return (
        <div className={classes.contentSection}>
            <h3 className={classes.contentSection__title}> Found 443 results </h3>
            <Books/>
        </div>
    )
}

export default ContentSection