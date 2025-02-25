import { useNavigate } from "react-router-dom";

export default function HomePage() {
   
   const nav = useNavigate();

   const handleClick = () => {
    nav('/PhotoGallery'); // This navigates to the /photo route
};

    return(
        <>
          <h1>Welcome to Photography Portfolio</h1>
          <p> This is a simple photography application , where user create their Portfolio, book the event. </p>

          <button onClick={handleClick}>Explore Photo here</button>
        </>
    );
}