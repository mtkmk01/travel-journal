import imgMarker from "./images/marker.png"

function Entry(props) {
  return (
    <>
      <div className="journal-entry">
        <div className="main-image-container">
          <img className="img-entry" src={props. img.src} alt={props.img.alt} />
        </div>
        <div className="info-container">
          <img
            className="marker"
            src={imgMarker}
            alt="map marker icon"
          />
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
          <h2 className="entry-title">{props.title}</h2>
          <p className="trip-dates">{props.dates}</p>
          <p className="entry-text">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Entry;
