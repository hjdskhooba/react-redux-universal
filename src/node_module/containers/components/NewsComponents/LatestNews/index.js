import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import * as R from "ramda";

import { fetchNews, loadMoreNews } from "../../../../actions/news";
import { getNews } from "../../../../selectors/news";

const LatestNewsList = ({ t, fetchNews, news, loadMoreNews }) => {
  useEffect(() => {
    fetchNews();
    setInterval(() => {
      fetchNews();
    }, 120000);
  }, []);
  const [ids, setIds] = useState([]);
  for (let i; i < news.length; i++) {
    if (news[i].id > 0) {
      console.log(news[i])
      setIds([...ids, news[i].id]);
    }
  }
  console.log(ids);
  const scroll = (n) => {
    window.scrollTo(0, +n);
  };

  const renderNews = (item, idx) => {
    const shortDescription = `${R.take(260, item.description)}...`;
    return (
      <div className="latest-list news-list latest-news" key={idx}>
        <div className="news-card">
          <img className="img-thumbnail image" src={item.props.image} />
          <div className="caption">
            <div className="fordf">
              <h4 className="pull-right">
                {item.created_at.replace("T", " ").split(".")[0]}
              </h4>
              {/* <p>{item.rating}</p> */}
              <span>{item.language}</span>
            </div>
            <h4 className="pull-right">
              <Link to={`/news/${item.id}`}></Link>
              {item.title}
            </h4>
            <p>{shortDescription}</p>
            <p className="news-card__links">
              <a href={`${item.link}`} className="btn btn-primary">
                {t("source_page")}
              </a>
              <Link onClick={() => scroll(0)} to={`/news/${item.id}`}>
                {t("more_info")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="latest-news-list news-list-wrapper" key={Math.random()}>
      <div className="container">
        <h2 className="title">{t("latest_news")}</h2>
        <div className="news-page">
          {news.map((item, idx) => renderNews(item, idx))}
        </div>
        <div className="row">
          <div className="news-page__bottom">
            <button
              className="pull-right btn btn-primary load-more"
              onClick={() => {
                loadMoreNews();
                scroll(592);
              }}
            >
              {t("load_more")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  fetchNews,
  loadMoreNews,
};

const mapStateToProps = (state) => ({
  news: getNews(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(LatestNewsList));
