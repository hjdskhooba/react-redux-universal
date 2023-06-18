
const Comments = ({ comments }) => {
  return (
    
      <div className="news__comments">
        {comments.map((item) => (
          <div className="news__comments-item" key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
    
  );
};

export default Comments;
