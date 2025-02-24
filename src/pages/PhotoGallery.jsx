import { useEffect, useState } from "react";
import axios from "axios";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotoData() {
      let res = await axios.get('http://localhost:3000/photo');
      setPhotos(res.data); // Update the state with the received data
    }
    getPhotoData();
  }, []);

  return (
    <>
      <h1>Photo Gallery</h1>
      <ul>
        {photos.map((photo, index) => (
          <li key={index}>
            <img src={photo.photoURI} alt="Photo" />
          </li>
        ))}
      </ul>
    </>
  );
}