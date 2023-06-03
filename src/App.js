import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-2 bg-white">
   <h  className="mt-2 font-bold text-lg">FILL UP THE FORM</h>
   
   <form   className="mt-3 flex flex-col gap-0.5   "  onSubmit={submitHandler}>

    <label htmlFor="firstName">First name</label>
    
    <input 
      type="text"
      name="firstName"
      id="firstName"
      placeholder="RUDRA"
      value={formData.firstName}
      onChange={changeHandler}
      className="   px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />

    <br/>
    <label htmlFor="lastName">Last name</label>
   
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="ROY"
      value={formData.lastName}
      onChange={changeHandler}
      className=" px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />

    <br/>
    <label htmlFor="email">Email Address</label>
   
    <input
      type="email"
      name="email"
      id="email"
      placeholder="xyze@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />

    <br/>
    <label htmlFor="country">Country</label>
    
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress">Street Address</label>
  
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />

    <br/>
    <label htmlFor="city">City</label>
   
    <input
      type="text"
      name="city"
      id="city"
      placeholder="KOLKATA"
      value={formData.city}
      onChange={changeHandler}
      className="px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />
 <br/> 
    <label htmlFor="state">State / Province</label>
    
    <input
      type="text"
      name="state"
      id="state"
      placeholder="WEST BENGAL"
      value={formData.state}
      onChange={changeHandler}
      className="px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />
    
 
    <br/>
    <label htmlFor="postalCode">Postal Code</label>
    
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
    />

    
    <br/>
    <fieldset >
      <legend >By Email</legend>

      <div className="flex ">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="comments">Comments</label>
        
        <p className="text-sm  text-slate-500 ">Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>
      <br/>

      <div className="flex">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p className="text-sm  text-slate-500 ">Get notified when a candidate applies for a job.</p>
      </div>
      </div>

       <br/>

      <div className="flex ">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      <div>
        <label htmlFor="offers">Offers</label>
        <p className="text-sm  text-slate-500 ">Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
      


    </fieldset>

    
    <br/>
    <fieldset>
      <legend className="text-lg">Push Notifications</legend>
      
      <p>These are delivered via SMS to your mobile phone.</p>
      
      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
        className="mt-2 mb-2"
      />

      <label htmlFor="pushEverything">Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
        className="mt-2 mb-2"
      />

      <label htmlFor="pushEmail">Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
        className="mt-2 mb-2"
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>

<br/>

   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>






   </form>

   </div>
  );
}

export default App;
