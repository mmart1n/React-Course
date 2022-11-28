const MyParagraph = (props) => {
  console.log("MY_PARAGRAPH EXECUTED");

  return <p>{props.children}</p>;
};

export default MyParagraph;
