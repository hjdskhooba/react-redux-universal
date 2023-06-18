import Comments from "../../../../pages/News/Comments";
import { Fragment } from "react";
import Item from "../Item/index.js";

const List = ({ array }) => {
  if (array.length && array[0].hasOwnProperty("comments")) {
    return (
      <div className="news__list">
        {array.map((item) => (
          <div className="news__item" key={item.id}>
            <h2>{item.title}</h2>
            {item.comments.length && (
              <div className="news__item-comments">
                <Comments comments={item.comments} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="todo__list">
        {array.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
          </Fragment>
        ))}
      </div>
    );
  }
};

export default List;
