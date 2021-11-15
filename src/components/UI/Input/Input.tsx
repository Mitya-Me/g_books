import { FC } from "react";
import classes from "./input.module.scss";

interface InputProps { 
    handleKey: any;
    searchValue: string;
    setSearchValue: any;
}

const Input: FC<InputProps> = ({handleKey, searchValue, setSearchValue}) => {

    return (
        <div className={classes.input}>
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={handleKey}
                type='text'
                className={classes.input__search}
                placeholder="Find your book" />
            <button className={classes.input__btn}></button>
        </div>
    );
};

export default Input;
