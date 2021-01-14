import React from 'react'
import ImageUpload from '../shared/ImageUpload'
import Select from 'react-select'
import { useLocation }  from 'react-router-dom'


function UserForm({ userType, selectOptions, handleMultiItems, handleSubmit, formdata, handleChange, errors }) {

  const { pathname } = useLocation()

  return (
    <>
      <div className="">


        <div className="card-register card center glass-morphism">
          <form className="create-user-form" onSubmit={handleSubmit}>
            <div className="card-main">

              <div className="card-side left">

                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      placeholder="Name"
                      name="name"
                      type="text"
                      value={formdata.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && <p className="field-error">{errors.name}</p>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">

                    <input
                      placeholder="Email"
                      name="email"
                      type="email"

                      value={formdata.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                {
                  pathname !== '/users/edit' &&
                  <>
                    <div className="field">
                      <label className="label">Password</label>
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
                  </>
                }
              </div>
              
                
              <span className="divider" />
              <div className="card-side right">

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
                      value={formdata.city}
                      onChange={handleChange}
                      placeholder="City"
                      name="city"
                    />
                  </div>
                  {errors.city && <p className="error-message">{errors.city}</p>}
                </div>
                <div className="field" >
                  <label className="label">Confirm if you are an Auctioneer</label>
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
                  <div>
                    <div className="field">
                      <label className="label">Skills</label>
                      <div className="control"
                        style={{ width: '80%', marginLeft: '10%' }}>

                        <Select
                          options={selectOptions}

                          isMulti
                          onChange={selected => handleMultiItems(selected, 'bidderCategories')}
                          className="react-select__option"

                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">Are you Avaliable Now </label>
                      <div className="control">
                        <input
                          type="checkbox"
                          name="bidderIsAvailable"
                          value={formdata.bidderIsAvailable}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                  </div>
                }
                <div className="field">
                  <ImageUpload
                    value={formdata.photo}
                    name="photo"
                    onChange={handleChange}
                    className="input"
                    labelText="Upload Image"
                    Select={<Select />}
                  />
                </div>
              </div>
            </div>


            {formdata.name && formdata.email && formdata.password && formdata.passwordConfirmation && formdata.bio && formdata.city && formdata.photo &&

              <div className="field card-body card-body-foot">
                <button type="submit" className="btn-submit-lg">Register</button>
              </div>
            }
          </form>
        </div>

      </div>
    </>
  )
}

export default UserForm