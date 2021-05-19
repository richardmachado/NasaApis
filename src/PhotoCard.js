import React from "react";
const Photo = (props) => {
  const explanationStyles = {
    fontWeight: "bold",
  };

  const titleStyles = {
    textAlign: "center",
  };

  //function to check to see if nasa api returns video or image
  // and render correct html accordingly
  function renderContentType() {
    if (props.photo.media_type === "image") {
      return (
        <img
          style={{ marginBottom: "20px" }}
          className="img-fluid rounded"
          src={props.photo.url}
          alt={props.photo.title}
        />
      );
    } else if (props.photo.media_type === "video") {
      return (
        <iframe
          style={{ marginBottom: "20px" }}
          title="nasa video of the day"
          className="img-fluid rounded"
          src={props.photo.url}
          alt={props.photo.title}
        ></iframe>
      );
    } else {
      return;
    }
  }
  return (
    <div className=" bg-light">
      <h4 style={titleStyles}>{props.photo.title}</h4>

      {renderContentType()}
      <p style={explanationStyles}>{props.photo.explanation}</p>
    </div>
  );
};

export default Photo;
