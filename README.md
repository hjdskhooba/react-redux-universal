# React Redux Universal

[Документация на русском](https://github.com/hjdskhooba/react-redux-universal/blob/main/RussianDoc.md)

This project was created by - hjdskhooba a.k.a Baki Sultanov a.k.a Sultanov Baigeldy Abdyhasymovich.

React Redux Universal - is a multi-tool-application created with a lot's of cool technologies, such as - React18, Redux, React-Redux, React-router-dom v5, Connected-react-router, React-hook-form, i18 -next, ramda, Framer-motion, Swiper.js, Scss, Testing-library/react, e.t.c

I created this project to improve
my knowledge of React and Redux,/
here you can use four tools,/
Task list, news page, weather page and currency converter/
All of this tools was created by only using Redux State manager.

Note: To make weather page and currency converter work you can register on [weather api website](https://www.weatherapi.com/) and get your own weather-api-key, then copy-paste it in node_module/api/weather.js, you'll be need to do the same thing for [currency converter](https://apilayer.com/) and [location api](https://www.geoapify.com/).

[See production](https://vercel.com)

# Project Structure

|build /
|node_moudles /
|public /
| |index.html /
|src /
| |__tests__ /
| | |setupTests.test.js /
| | |...тестовые файлы /
| |app /
| | |pages /
| | |scss /
| | |actions /
| | |reducers /
| | |store.js /
| | |API /
| | |images /
| | |i18n.js /
| |index.js


Created a project structure based on [this video](https://www.youtube.com/watch?v=TP4RK1OnD_0&list=PLi5fDCkhuN9HzO73bzs_Z917hNtEbE9Vs&index=2)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
