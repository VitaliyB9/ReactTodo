import React from 'react'
import InputPost from '../Inputs/InputPost'
import Select from '../Select/Select'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <InputPost
          onChange={(e) => setFilter({...filter, querySearch: e.target.value})} // возвращаем все поля из этого объекта, но заменяем на нужное
          value={filter.querySearch} // получаем поле из объекта фильтр
          placeholder="search"
        />
        <Select
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})} // select возвращает не ивент, а уже выбранный алгоритм сортировки
          defaultValue="Сортировка по" // пишем начальное состояние
          options={[ // будет два поля для сортировки по name и description
            { value: "title", name: "названию" }, // name - сам текст который будет находится внутри опции
            { value: "body", name: "описанию" },
          ]}
        />
      </div>
  )
}

export default PostFilter