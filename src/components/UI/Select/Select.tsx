import {FC} from 'react'
import classes from './select.module.scss'

type SelectProps = {
    selectTitle: string;
    options: string[];
}

const Select: FC<SelectProps> = (props) => {
    const {selectTitle, options} = props
    
    return (
        <div className={classes.select}>
            <span className={classes.select__title}> {selectTitle} </span>
            <select className={classes.select__item}>
                {
                    options.map(opt => <option value={opt}> {opt} </option>)
                }
            </select>
        </div>
    )
}

export default Select