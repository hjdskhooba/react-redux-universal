import Layout from "../../containers/Layout";
import List from "../../containers/components/TodoComponents/List";
import HotTopics from "../../containers/components/NewsComponents/HotTopics";
import LatestNews from "../../containers/components/NewsComponents/LatestNews";
import Nav from "../../containers/components/NewsComponents/Nav";

const NewsList = () => {
  const news = [
    {
      id: 1,
      title: "This is first news",
      description: "Description",
      comments: [
        {
          name: "Baki",
          email: "sks@gmail.com",
          text: "Comment for news with id 1",
          id: 1,
        },
      ],
    },
  ];
  return (
    <Layout>
      <div className="news">
        <div className="container">
          <div className="news__inner">
            <h1 className="title">This is News page</h1>
            <List array={news} />
            <Nav/>

            <HotTopics />
            <LatestNews />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsList;
