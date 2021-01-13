import React from 'react'
import ImageUpload from '../shared/ImageUpload'
import Select from 'react-select'


function UserForm( { handleUserChoice, userType, selectOptions, handleMultiItems, handleSubmit, formdata, handleChange, errors } ){
  return (
    <>
      {!userType &&
      <div className="register-question-buttons"> 
        <p>Please Select Account Type</p>
        <button onClick={handleUserChoice}>Auctioneer</button>
        <button onClick={handleUserChoice}>Bidder</button>
      </div>
      }
      {userType &&
      <div className="register-form-container">
        <form className="create-user-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name </label>
            <div className="control">
              <input
                placeholder="Name"
                name="name"
                value={formdata.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
             
              <input
                placeholder="Email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="field">
            <label className="label">Password </label>
            <div className="control">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input
                type="password"
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                value={formdata.passwordConfirmation}
                onChange={handleChange}
              />
            </div>
            {errors.passwordConfirmation && <p className="error-message">{errors.passwordConfirmation}</p>}
          </div>
          <div className="field">
            <label className="label">Bio</label>
            <div className="control">
              <textarea
                placeholder="Bio"
                name="bio"
                value={formdata.bio}
                onChange={handleChange}
              />
            </div>
            {errors.bio && <p className="error-message">{errors.bio}</p>}
          </div>
          <div className="field">
            <label className="label">City</label>
            <div className="control">
              <input
                placeholder="City"
                name="city"
              />
            </div>
            {errors.city && <p className="error-message">{errors.city}</p>}
          </div>
          <div className="field">
            <label className="label">Are uou a Auctioneer</label>
            <div className="control">
              <input
                type="checkbox"
                name="isAuctioneer"
                onChange={handleChange}
                checked={formdata.isAuctioneer}
              />
            </div>
          </div>
          {userType === 'bidder' &&
            <>
              <div className="field">
                <label className="label">Skills</label>
                <div className="control">

                  <Select  
                    options={selectOptions}
                    isMulti
                    onChange={selected => handleMultiItems(selected, 'bidderCategories' )}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Are you Avaliable Now </label>
                <div className="control">
                  <input
                    type="checkbox"
                    name="bidderIsAvailable"
                    value={formdata.bidderIsAvailable}
                    onChange={handleChange}
                  />
                </div>
              </div>
             
            </>
          }
          <div className="field">
            <ImageUpload 
              value={formdata.photo}
              name="photo"
              onChange={handleChange}
              className="input"
              labelText="profileImage"
              Select={<Select/>}
            />
          </div>
          <div className="field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      }
    </>
  )
}

export default UserForm