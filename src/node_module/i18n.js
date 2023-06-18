import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    updates: "Updates",
                    updated: "Updated",
                    Home: "Home",
                    News: "News",
                    Sport: "Sport",
                    Travel: "Travel",
                    Future: "Future",
                    Culture: "Culture",
                    source_page: "Source page",
                    more_info: "More info",
                    latest_news: "Latest News",
                    load_more: "Load More",
                }
            },
            ru: {
                translation: {
                    updated: "Обновлено",
                    updates: "Обновления",
                    Home: "Домой",
                    News: "Последнее",
                    Sport: "Спорт",
                    Travel: "Путешествия",
                    Future: "Будущее",
                    Culture: "Культура",
                    source_page: "Источник",
                    more_info: "Подробнее",
                    latest_news: "Последние новости",
                    load_more: "Загрузить еще",
                }
            }
        }
    }
)