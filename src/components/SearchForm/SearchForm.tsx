import { FC } from 'react'

import Select from '../UI/Select/Select'
import Input from '../UI/Input/Input'

import classes from './searchForm.module.scss'


const SearchForm: FC = (props) => {
    const categoriesOptions = ['all', 'art', 'biography', 'computer', 'history', 'medical', 'poetry']
    const sortOptions = ['relevance', 'newest']

    return (
        <form className={classes.searchForm}>
             <Input />
                <div className={classes.searchForm__selects}>
                    <Select
                        selectTitle={'Categories'}
                        options={categoriesOptions}
                    />
                    <Select
                        selectTitle={'Sorting by'}
                        options={sortOptions}
                    />
                </div>
        </form>
    )
}

export default SearchForm