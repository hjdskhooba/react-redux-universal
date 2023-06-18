import LatestNewsList from "../LatestNews";
import Layout from "../../../Layout/index.js";
import { fetchNewsItemById } from "../../../../actions";
import { getNewsItemById } from "../../../../selectors";
import { withTranslation, Trans } from "react-i18next";
import { connect } from "react-redux";

const SingleNewsPage = ({ fetchNewsItemById, item }) => {
  useEffect(() => {
    fetchNewsItemById(this.props.match.params.id);
  }, []);

  const renderContent = (item, t) => {
    return (
      <div className="news-item-page__body news-item__inner">
        <div className="news-item-page-row blocks">
          <div className="news-item__left">
            <a className="live-updates" href={item.link}>
              <span> </span> Live {t("updates")}
            </a>
            <h1 className="title">{item.title}</h1>
            <p className="p">
              {item.description}{" "}
              <span>
                <a href={item.link}>{item.source}</a>
              </span>
            </p>
            <p className="p p2">
              {t("Updated")} {item.created_at}
            </p>
          </div>
          <div className="news-item__right">
            <img src={item.props.image} alt={item.props["image:alt"]} />
            <p className="img-alt">{item.props["image:alt"]}</p>
          </div>
        </div>
        <div className="bottom">
          <a href={item.link} className="source-page-btn">
            <Trans i18nKey="source-page">{t("source_page")}</Trans>
          </a>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="news-item-page">
        <div className="container">{item && renderContent(item, t)}</div>
      </div>
      <LatestNewsList />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    item: getNewsItemById(state, state.newsItemPage.id),
  };
};

const mapDispatchToProps = {
  fetchNewsItemById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SingleNewsPage));
