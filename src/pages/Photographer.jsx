import axios from "axios";
import { useEffect, useState } from "react";
import PhotographerForm from "../components/PhotographerForm";

export default function PhotographerPage() {

    const [ photographer, setPhotographer]= useState([]);

    useEffect(() => {
        async function getPhotographerData() {
            let res = await axios.get('http://localhost:3000/photographer');
            setPhotographer(res.data);
            console.log(res.data);
        }
        getPhotographerData(); 

    }, [])

    async function handleAddPhotographer(newPhotograper) {
        try{
        let res = await axios.post('http://localhost:3000/photographer', newPhotograper);
        setPhotographer([...photographer, newPhotograper]);
        } catch (err) {
            console.error(err);
          
        }
    }



    return(
        <>
          <h1> Photographer Portfolio</h1>
          <PhotographerForm onAddPhotographer={handleAddPhotographer} />
        </>
    );
}