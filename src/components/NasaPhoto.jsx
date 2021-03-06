import React, { useEffect, useState } from "react";
import api from "../services/api";
import NavBar from "./NavBar";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    api
      .get(`apod?api_key=rFrZMO7qYWP8gIO8LAAhVNcIhVQvcperFuwTE6UL`)
      .then((data) => {
        setPhotoData(data.data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!photoData) return <div>Loading...</div>;

  return (
    <>
      <div id="headText">Every Day a different photo!</div>
      <div id="NasaPhoto">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="media" />
        ) : (
          <iframe
            src={photoData.url}
            frameborder="0"
            title="space-video"
            className="media"
            allowFullScreen
          />
        )}

        <div>
          <h1>{photoData.title}</h1>
          <p className="photo_date">{photoData.date}</p>
          <p className="photo_explanation">{photoData.explanation}</p>
        </div>
      </div>
      <NavBar />
    </>
  );
}
