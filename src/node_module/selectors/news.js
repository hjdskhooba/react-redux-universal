import * as R from "ramda";

export const getNewsItemById = (state, id) => R.prop(id, state.news);

export const getNews = state => {
    const gr = new RegExp(state.newsPage.search, 'gi');
    const contains = (s, item) => {
        return gr.test(R.prop(s, item))
    }
    const applySearch = item => {
        return contains("title", item) || contains("description", item) || contains("source", item || contains("created_at", item))
    }
    const news = R.compose(
        R.filter(applySearch),
        R.map(id => getNewsItemById(state, id)),
    )(state.newsPage.ids)
    return news
};

export const getTopNews = state => {
    const data = R.map(id => getNewsItemById(state, id), state.swiper.ids);
    return data;
};

export const getRenderedNewsLength = state => R.length(state.newsPage.ids);