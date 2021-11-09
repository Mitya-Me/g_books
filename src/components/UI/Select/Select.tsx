import {FC} from 'react'
import classes from './select.module.scss'

type SelectProps = {
    selectTitle: string;
    options: string[];
    value: string;
    setValue: any;
}

const Select: FC<SelectProps> = ({selectTitle, options, setValue, value}) => {
    
    return (
        <div className={classes.select}>
            <span className={classes.select__title}> {selectTitle} </span>
            <select className={classes.select__item}
                value={value}
                onChange={e => setValue(e.target.value)}
            >
                {
                    options.map(opt => <option value={opt}> {opt} </option>)
                }
            </select>
        </div>
    )
}

export default Select