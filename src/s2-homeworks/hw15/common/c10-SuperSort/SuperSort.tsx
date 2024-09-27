import React from 'react'
import ArrowDown from '../c10-SuperSort/down-long-solid.svg';
import ArrowUp from '../c10-SuperSort/up-long-solid.svg';
import ArrowNone from '../c10-SuperSort/0-solid.svg';

// добавить в проект иконки и импортировать
const downIcon = ArrowDown;
const upIcon = ArrowUp;
const noneIcon = ArrowNone

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down
    } else if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort icon"
                style={{width: '16px', height: '16px'}}
            />
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
