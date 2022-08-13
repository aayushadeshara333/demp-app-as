const FormContainer = () => {
  return (
    <div className="form-container-main">
      <div className="form-container">
        <div className="form-container-header">
          <div className="back-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="" style={{ width: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <p>
            Patient Profile
          </p>
        </div>
        <div className="form-container-body">
          <div className="form-body-header">
            <p className="form-header-title">
              Fill out the form carefully for patient registration
            </p>
            <div className="download-pdf-button">
              <div className="download-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <p>
                Import Data From PDF
              </p>
            </div>
          </div>
          <hr />
          <div className="form-body-content">
            <div className="first-six-inputs">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="First Name" />
              <div className="radio-group-container">
                <div>
                  Select Patient’s Gender
                </div>
                <div className="radio-group">
                  <div>
                    <input type="radio" name="gender" id="male" />
                    <label for="male">Male</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" id="female" />
                    <label for="female">Female</label>
                  </div>
                  <div>
                    <input type="radio" name="gender" id="other" />
                    <label for="other">Other</label>
                  </div>
                </div>
              </div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="First Name" />
            </div>
            {/* <div className="last-two-inputs">
              <input type="text" placeholder="First Name" />
              <div className="radio-group-container">
                <div>
                  Select Patient’s Gender
                </div>
                <div className="radio-group">
                  <input type="radio" name="gender" id="male" />
                  <label for="male">Male</label>
                  <input type="radio" name="gender" id="female" />
                  <label for="female">Female</label>
                  <input type="radio" name="gender" id="other" />
                  <label for="other">Other</label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="form-buttons">
        <button className="form-button">New</button>
        <button className="form-button">Complete Pending Review</button>
        <button className="form-button">Follow Up</button>
      </div>
    </div>
  );
}

export default FormContainer;