import axios from "axios";
import { useEffect } from "react";

export default function PhotographerForm() {

    useEffect(() => {
        async function getPhotographerData() {
            let res = await axios.get('http://localhost:3000/photographer');

            console.log(res.data);
        }
        getPhotographerData(); 

    }, [])

    return(
        <>
          <h1> Photographer Portfolio</h1>
        </>
    );
}