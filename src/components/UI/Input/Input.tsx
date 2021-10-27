import { FC } from "react";

import classes from "./input.module.scss";

const Input: FC = () => {
    return (
        <div className={classes.input}>
            <input type='text' className={classes.input__search} placeholder="Find your book"/>
            <button className={classes.input__btn}></button>
        </div>
    );
};

export default Input;
