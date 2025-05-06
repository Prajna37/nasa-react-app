export default function Main({ data }) {
    const { media_type, hdurl, url, title } = data;
  
    return (
      <div className="imgContainer">
        {media_type === "image" ? (
          <img src={hdurl || url} alt={title || "bg-img"} className="bgImage" />
        ) : (
          <iframe
            src={url}
            title={title}
            className="bgImage"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    );
  }
  