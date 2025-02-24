export default function PhotographerForm() {

    

    return(
        <>
          <form >
            <label > Name:  </label>
               <input type="text" name="name" /> <br />  
            
            <label > Email: </label>
               <input type="email" name="email" /> <br /> 
            
            <label > Phone: </label>
               <input type="text" name="phone" /> <br />
            
            <label > Bio: </label>
              <textarea name="bio" ></textarea> <br />
            
            <label > Portfolio URL: </label>
               <input type="url" name="portfolioUrl" /> <br />

            <button type="submit"> Submit </button>   
          </form>
        </>
    );
}