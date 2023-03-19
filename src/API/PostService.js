import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    // аргументами передаем лимит (для нашего случая 10, так как максимальное количество нашего сервера 100), страница начинается с 1
    // статичная асинхронная функция, которая возвращает список постов
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          // передаем query параметры
          _limit: limit,
          _page: page,
        },
      }
    );
    return response; // возвращаем список постов
  }
}
