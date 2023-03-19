// реакт - это библиотека для создания пользовательских интерфесов (не зависим от  браузера)
// хуки - некоторые функции, которые предоставляет реакт (используются в функциональных либо в сових компонентах, могут использоваться только на верхнем уровне вложенности)
// props - некоторые аргументы, которые может принимать компонент извне (обмен всегда сверху вниз)
// жизненый цикл 3 этапа: 1) монтирование - создается компонент и монтируется в дом дерево (первичная подгрузка данных) 2) обновление компонентов - изменили состояние, произошел перерендер(перерисовка компонентов) - активная жизни компонента, когда он живет(следим за изменением событий и производим какие-либо действия) 3) размонтирование - компоненты не нужны, мы их удаляем(переходим на другую страницу и за ненадобность реакт его уничтожает; очистка - отписываемся от слушателей событий, очищаем глобальное хранилище)
import React, { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter/PostFilter";
import PostService from "../API/PostService";
import ButtonPost from "../components/Buttons/ButtonPost";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([
    // // управление состоянием
    // {
    //   id: 1,
    //   name: "Write something in name",
    //   body: "Write something in description",
    // }, // пишем по умолчанию массив (объектов) наших постов
  ]);

  const [filter, setFilter] = useState({ sort: "", querySearch: "" }); // выбранный алгоритм сортировки и поисковая строка
  const [modal, setModal] = useState(false); // делаем состояние для модалки с дефолтным состоянием false
  const [totalPages, setTotalPages] = useState(0); // состояние для общего кол-ва постов
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.querySearch);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    // в функцию для получения постов принимает limit и page
    // isPostsLoading - состояние загрузки постов, postError - ошибка
    // вызываем наш хук и передаем туда асинхронный callback
    const response = await PostService.getAll(limit, page); // обращаемся к сервису URL и вызываем метод getAll(), в него параметрами передаем лимит и страницу
    setPosts(response.data); // вызываем функцию setPosts и туда передаем что мы получили в теле ответа
    const totalCount = response.headers["x-total-count"]; // обращаемся к headers и оттуда достаем общее количество постов
    setTotalPages(getPageCount(totalCount, limit)); // передаем общее кол-во постов в функию, вызывая функцию
  });

  useEffect(() => {
    fetchPosts(limit, page); // при вызове функции так же передаем limit и page
  }, []); // принимает callback и массив зависимостей (можем передавать неограниченное число зависимостей) (когда он пустой, callback отработает 1 раз, когда компонент был вмонтирвоан), можем следить за стадией размонтирования

  const createPost = (newPost) => {
    // функция ожидает на вход новый пост
    setPosts([...posts, newPost]); // возвращаем все предыдущие посты и добавляем новый в конец
    setModal(false); // чтобы окно модальное закрывалось
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); // из массива постов удаляем тот пост, который мы передали аргументам (функция filter возвращает новый массив, отфильтрованный по каким-то значениям)
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page); // в функции changePage вызываем функцию fetchPosts с переданными данными limit и page
  };

  return (
    <div className='App'>
      <button onClick={fetchPosts}>Get Posts</button>
      <ButtonPost onClick={() => setModal(true)}>Create posts</ButtonPost>
      {/* вешаем слушать событий для добавления постов, изменяем состояние setModal на true */}
      <Modal
        visible={modal}
        setVisible={setModal}
      >
        {" "}
        {/* передаем modal как пропс, а функция которая изменяет состояние setVisible */}
        <PostForm
          create={createPost}
          post={{}}
        />{" "}
        {/* передаем функцию обратного вызова (callback) create */}
      </Modal>

      <hr />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && <h1>Find error: {postError}</h1>}
      {isPostsLoading ? ( // условие если true, то показываем <h1></h1>
        <h1>Loading...</h1>
      ) : (
        // выводим список постов если загрузки нет
        <PostList
          remove={removePost} // если напишем (), функция просто вызовется
          posts={sortedAndSearchPosts} // передаем отсортированный и отфильтрованный массив постов
          title='TodoList'
        />
      )}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
