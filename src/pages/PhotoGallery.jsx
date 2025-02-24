import { useEffect } from "react";
import axios from "axios";

export default function PhotoGallery() {

    useEffect(() => {
        async function getPhotoData() {
            let res = await axios.get('http://localhost:3000/photo');

            console.log(res.data);
        }
        getPhotoData(); 

    }, [])


    return(
        <>
        <h1>Photo Gallery</h1>
        </>
    )
}