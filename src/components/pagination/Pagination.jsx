import React from 'react'
import { getPagesArray } from '../../utils/pages';

const Pagination = ({totalPages,page, changePage }) => { // тут необходимо получать номер текущуей страницы, функции которая изменяет этот номер, массив, на основании которого необходимо отрисовыввать эл-ты (для создания массива надо знать сколько всего у нас страниц)
  let pagesArray = getPagesArray(totalPages); // формируем массив

  return (
      <div className="pageWrapper">
        {pagesArray.map(
          (p) => (
            // на основании массива с номерами страниц рисуем кнопки с номерами стр
            <span
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? "page pageCurrent" : "page"}
            >
              {p}
            </span>
          ) // внутрь кнопки помещаем номер стр
        )}
      </div>
  )
}

export default Pagination