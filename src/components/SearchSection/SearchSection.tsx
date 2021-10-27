import { FC } from "react";

import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

import classes from "./searchSection.module.scss";

const SearchSection: FC = () => {
    const categoriesOptions = ['all', 'art', 'biography', 'computer', 'history', 'medical', 'poetry']
    const sortOptions = ['relevance', 'newest']

    return (
        <div className={classes.searchSection}>
            <div className={classes.searchSection__wrapper}>
                <h1 className={classes.searchSection__title}> Search for books </h1>
                <Input />
                <div className={classes.searchSection__selects}>
                    <Select
                        selectTitle={'Categories'}
                        options={categoriesOptions}
                    />
                    <Select
                        selectTitle={'Sorting by'}
                        options={sortOptions}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
