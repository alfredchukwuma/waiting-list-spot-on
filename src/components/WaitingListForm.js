import React from 'react';
import './WaitingListForm.css'; // Style for the form

const WaitingListForm = () => {
  return (
    <form className="waitlist-form">
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" placeholder="Alfred" />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" placeholder="Chukwuma" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="alfred@example.com" />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="Enter your age" />
      </div>


      <div className="form-group">
        <label htmlFor="instagram">Instagram username (optional)</label>
        <input type="text" id="instagram" placeholder="https://instagram.com/..." />
      </div>

      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn username (optional)</label>
        <input type="text" id="linkedin" placeholder="https://linkedin.com/..." />
      </div>

      <div className="form-group">
        <label>What type of car do you drive</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="role" value="Sedan" />
            Sedan
          </label>
          <label>
            <input type="radio" name="role" value="Coupe" />
            Coupe
          </label>
          <label>
            <input type="radio" name="role" value="SUV" />
            SUV
          </label>
          <label>
            <input type="radio" name="role" value="Pickup" />
            Pickup
          </label>
          <label>
            <input type="radio" name="role" value="Other" />
            Other
          </label>
        </div>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default WaitingListForm;

