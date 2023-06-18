import data from "./mockNews.js";
import * as R from "ramda";
// import axios from 'axios';

// const options = {
//     // Методы тоже если что настроим
//     // чтобы можно было не только получать, 
//     // но и делать что нибудь еще, к примеру заблокать или пожаловаться.
//     method: 'GET',
//     // Пока что mockApi, потом поставлю оригинал - https://google-news-api1.p.rapidapi.com/search
//     url: 'https://64686ded60c8cb9a2ca99ce6.mockapi.io/api/v1/news',
//     params: {
//       // В самом конце добавлю i18n и использую его.
//       language: 'ru'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'e6956a2b6bmsh5763ab59c8737c4p14628ejsn76630a0c52f5',
//       'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
//     },
// };

export const fetchNews = async () => {
    // const data = await axios.request(options);
    return new Promise((res, rej) => {
        res(data)
    })
};

export const fetchNewsItem = async (id) => {
    // В api я просто передам id в путь.
    return new Promise((res, rej) => {
        const item = R.find(R.propEq('id', +id), data);
        res(item)
    })
};

export const fetchTopNews = async () => {
    // const data = await axios.request(options + query parameter sort_by_date);
    const newData = [...data];
    return new Promise((res, rej) => {
        res(newData.reverse())
    })
};
export const loadMoreNews = async ({ offset }) => {
    // const data = await axios.request(options + query parameter offset);
    return new Promise((res, rej) => {
        res(data)
    })
};