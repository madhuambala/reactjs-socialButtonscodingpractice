const Button = (props) => {
  let { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button buttonText="like" className="like-button" />
      <Button buttonText="comment" className="comment-button" />
      <Button buttonText="share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
