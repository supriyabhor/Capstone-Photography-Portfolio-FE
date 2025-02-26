import { useEffect, useState } from "react";
import axios from "axios";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotoData() {
        console.log('Getting photo data...');
      let res = await axios.get('http://localhost:3000/photo');
      console.log(res.data);
      setPhotos(res.data); // Update the state with the received data
    }
    getPhotoData();
  }, []);

  return (
    <>
      <h1>Photo Gallery</h1>
      
      <div className="photo-gallery">
         {photos.map((photo, index) => (
            <img key={index} src={photo.photoURL} alt="Photo" />
         ))}
      </div>

    </>
  );
}