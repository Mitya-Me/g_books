import { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { categoriesOptions, sortOptions } from "../../base";
import classes from "./searchForm.module.scss";
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";

const SearchForm: FC = () => {
    const { fetchBooks } = useActions();
    const [searchValue, setSearchValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("all");
    const [sortValue, setSortValue] = useState("relevance");

    const handleKey = (event: { key: string }) => {
        if (event.key === "Enter") {
            fetchBooks(searchValue, categoryValue, sortValue);
        }
    };

    return (
        <div className={classes.searchForm}>
            <Input
                handleKey={handleKey}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className={classes.searchForm__selects}>
                <Select
                    value={categoryValue}
                    setValue={setCategoryValue}
                    selectTitle={'Categories'}
                    options={categoriesOptions}
                />
                <Select
                    value={sortValue}
                    setValue={setSortValue}
                    selectTitle={'Sorting by'}
                    options={sortOptions}
                />
            </div>
        </div>
    );
};

export default SearchForm;
