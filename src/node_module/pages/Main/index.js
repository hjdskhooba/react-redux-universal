import Layout from "../../containers/Layout";
import Navigator from "../../containers/components/Navigator";

const Main = () => {
  return (
    <Layout>
      <main className="main">
        <div className="container">
          <div className="main__inner">
            <h1>React + Redux Universal Application</h1>
            <Navigator />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
