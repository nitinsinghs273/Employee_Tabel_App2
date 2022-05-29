
import './OTP.css';




function OTP() {
 
 
  return (
    <section className='App'>
      <div className="container">
        <header className="header">
          <h1 className="heading">
            OTP <br />
            Verification
          </h1>
          <p className="message">OTP has been sent to +91 </p>
        </header>
        <div>
        <form >
        <span>
           <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}
           type="text"
           id="input-field"
           />
            <input
           maxLength={1}  
           type="text"
           id="input-field"
           />
           </span>
           <div>
            <button type="submit" className="button"  >
              Continue
            </button>
            </div>
          </form>
        </div>
      
        </div>


    </section>
  );
}

export default OTP;
