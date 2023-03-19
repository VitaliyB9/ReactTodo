import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    // производит вычесления, запоминает результат и кэширует (мемоизация)
    // первый параметр callback(должен возвращать результат вычеслений (например остортированный массив)), второй параметр массив зависимостей (какие-то переменные)
    if (sort) {
      // если не пустая строка
      return [...posts].sort(
        // возвращаем отсортированный массив
        (
          a,
          b // метод sort мутирует изначальный массив, поэтому разворачиваем посты в новый массив и отсортируем вновь созданный массив
        ) => a[sort].localeCompare(b[sort]) // localeCompare - для сравнения строк
      );
    }
    return posts; // в обратном случае возвращаем обычный массив постов
  }, [sort, posts]); // данный callback будет вызван только в том случае, если какая-то из зависимостей в массиве поменяет свое значение (нам надо следить за выбранным алгоритмом сортировки и за изменением массива с постами)
  return sortedPosts;
};

export const usePosts = (posts, sort, querySearch) => {
  const sortedPosts = useSortedPosts(posts, sort); // получаем массив отсортированных постов
  const sortedAndSearchPosts = useMemo(() => {
    // на основании отсортированного массива можем делать поиск
    return sortedPosts.filter(
      (
        post // по поисковой строке надо отфильтровать массив
      ) =>
        post.body // обращаемся к названию поста (поле title)
          .toLocaleLowerCase()
          .includes(querySearch.toLocaleLowerCase()) // в массиве останутся только те посты, названия которых содержит нужный для нас поисковый запрос (делаем нечувствительность к регистру)
    );
  }, [querySearch, sortedPosts]); // поисковая строка и уже отсортированный массив
  return sortedAndSearchPosts;
};
