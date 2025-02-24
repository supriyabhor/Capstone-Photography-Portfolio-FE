import axios from "axios";
import { useEffect } from "react";
import PhotographerForm from "../components/PhotographerForm";

export default function PhotographerPage() {

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
          <PhotographerForm />
        </>
    );
}