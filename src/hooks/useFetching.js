import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false); // состояние отвечает за загрузку
  const [error, setError] = useState(""); // если произойдет ошибка создаем состояние, куда будем помещать текст ошибки

  const fetching = async (...args) => {
    // чтобы аргументы попали в функцию, нам необходимо в fetching их принять
    try {
      setIsLoading(true); // изменяем состояние setIsLoading на true (чтобы показалась наша надпись)
      await callback(...args); // вызываем callback, передаем наши аргументы (им может быть любая функция с любым кол-ом аргументов)
    } catch (e) {
      setError(e.message); // если ошибка вызываем функцию setError и передаем в нее какой-то message
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error]; // возвращаем нашу функциюб состояние загрузки и ошибку
};
