import React from "react";

const Select = ({ options, defaultValue, value, onChange }) => { // на основании массива опций в него будут добавляться пункты
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}> {/* передаем не сам event, а значение которое выбрал пользователь */}
      <option disabled={true} value="">
        {defaultValue}
      </option>
      {options.map((option) => ( // по массиву опций итерируемся и для каждой опции отрисовываем HTML - эл-т
        <option key={option.value} value={option.value}> {/* как value указываем value из объекта, указываем уникальынй ключ (подразумевается что value всегда уникальный) */}
          {option.name} {/* то, что помещаем внутрь опции, то есть сам текст достаем из поля name */}
        </option>
      ))}
    </select>
  );
};

export default Select;
