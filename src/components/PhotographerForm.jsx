import { useNavigate } from "react-router-dom";

export default function PhotographerForm({onAddPhotographer}) {
      const nav = useNavigate();
    
   async function handleSubmit(e) {
        e.preventDefault();
        const newPhotograper = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            bio: e.target.bio.value,
            portfolioURL: e.target.portfolioURL.value,
        };
       
        if (typeof onAddPhotographer === 'function') {
            onAddPhotographer(newPhotograper);
          } else {
            console.error('onAddPhotographer is not a function');
          }

        console.log(newPhotograper);
        e.target.reset(); //clear the form field

         // Navigate to a different page
        nav('/'); // Replace with the desired page
    }
    

    return(
        <>
          <form className="user-form" onSubmit={handleSubmit} >
            <label > Name: </label>
               <input type="text" name="name" /> <br />  
            
            <label > Email: </label>
               <input type="email" name="email" /> <br /> 
            
            <label > Phone: </label>
               <input type="text" name="phone" /> <br />
            
            <label > Bio: </label>
              <textarea name="bio" ></textarea> <br />
            
            <label > Portfolio URL: </label>
               <input type="url" name="portfolioURL" /> <br />

            <button type="submit"> Submit </button>   
          </form>
        </>
    );
}