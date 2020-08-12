import React from "react";
const Contact=() =>{
    /*const [data, setData] = useState({
        Emailaddress:"",
        Fullname:"",
        PhoneNumber:"",
        Message:"",
    })
    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            };
        
        });
    };
    const formSubmit = (e) => {
        
    };*/
    return(
        <>
           <div className="my-5">
               <h1 className="text-center">Contact us</h1>
           </div>
           <div className="container">
               <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="Emailaddress"  onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Full name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="Fullname"  onChange={InputEvent} placeholder="enter full name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Phone number</label>
                            <input type="integer" class="form-control" id="exampleFormControlInput1" name=" PhoneNumber" onChange={InputEvent} placeholder="Enter your phone number " />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Select nation:</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>Nepal</option>
                            <option>India</option>
                            <option>Pikastan</option>
                            <option>Bhutan</option>
                            <option>Maldives</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name="Message" onChange={InputEvent}></textarea>
                        </div>
                        <div class="col-sm-10 my-3">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </form>

                    </div>
               </div>
           </div>
        </>
    );
};
export default Contact;