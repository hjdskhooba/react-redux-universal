import { useEffect } from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import { fetchTopNews } from "../../../../actions/news";
import { getTopNews } from "../../../../selectors/news.js";

const HotTopics = ({ fetchTopNews, top_news }) => {
  useEffect(() => {
    fetchTopNews();
  }, []);

  const renderTopNews = (item, idx) => {
    const slicedTitle = R.take(60, item.title);
    return (
      <figure key={idx}>
        <figcaption>
          <div className="hot-topics__slide">
            <div className="hot-topics__news_body hot-left">
              <img
                src={item.props.image}
                alt={item.props["image:alt"]}
                className="hot-img"
              />
              <h3 className="hot-topics__news--title">{slicedTitle}</h3>
              <div className="bottom">
                <p>{item.created_at}</p>
                <p>{item.source}</p>
              </div>
            </div>
            <p className="hot-topics__news_descrition right desc">
              {item.description}
            </p>
          </div>
        </figcaption>
      </figure>
    );
  };

  return (
    <div className="hot-topics news-page-topics mb-swiper">
      <div className="container">
        <div className="hot-topics__body">
          <h1 className="hot-topics-title title">Hot Topics</h1>
          <div className="hot-topics-main" id="slider">
            <div className="hot-topics-main-in" id="move">
              {top_news.map((item, idx) => renderTopNews(item, idx))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchTopNews,
};

const mapStateToProps = (state) => ({
  top_news: getTopNews(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotTopics);
