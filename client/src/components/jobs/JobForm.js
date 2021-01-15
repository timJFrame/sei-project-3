import React from 'react'
import ImageUpload from '../shared/ImageUpload'

function JobForm({ handleChange, handleSubmit, formdata, errors }) {
  return (
    <div className="create-job-form-container card glass-morphism">
      <form className="create-job-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Job Title</label>
          <div className="control">
            <input
              placeholder="JobTitle"
              className="input"
              name="jobTitle"
              onChange={handleChange}
              value={formdata.jobTitle}
            />
          </div>
          {errors.jobTitle && <p className="error-message">{errors.jobTitle}</p>}
        </div>
        <div className="field">
          <label className="label">Job Description</label>
          <div className="control">
            <textarea
              placeholder="Job Description"
              className="input"
              name="jobDescription"
              onChange={handleChange}
              value={formdata.jobDescription}
            />
          </div>
          {errors.jobDescription && <p className="error-message">{errors.jobDescription}</p>}
        </div>
        <div className="field">
          <label className="label">Job Deadline</label>
          <div className="control">
            <input
              placeholder="Job Deadline"
              className="input"
              name="jobDeadline"
              onChange={handleChange}
              value={formdata.jobDeadline}
            />
          </div>
          {errors.jobDeadline && <p className="error-message">{errors.jobDeadline}</p>}
        </div>
        <div className="field">
          <label className="label">Job Category</label>
          <div className="select">
            <select name="jobCategory" onChange={handleChange} value={formdata.jobCategory}>
              <option disabled></option>
              <option value="Android-Dev">Andriod Devloper</option>
              <option value="Apple-Dev">Apple Developer</option>
              <option value="Back-End">Back-End Developer</option>
              <option value="Front-End">Front-End Develope</option>
              <option value="Game-Dev">Game Developer</option>
              <option value="UI-Dev">UI Developer</option>
            </select>
          </div>
          {errors.jobCategory && <p className="error-message">{errors.jobCategory}</p>}
        </div>
        <div className="field">
          <label className="label">Max Job Fee</label>
          <div className="control">
            <input
              placeholder="Job Fee"
              className="input"
              name="jobFee"
              onChange={handleChange}
              value={formdata.jobFee}
            />
          </div>
          {errors.jobFee && <p className="error-message">{errors.jobFee}</p>}
        </div>
        <div className="field">
          <ImageUpload
            value={formdata.jobPhoto}
            name="jobPhoto"
            onChange={handleChange}
            labelText="Profile Image"
          />
        </div>
        {errors.jobPhoto && <p className="error-message">{errors.jobPhoto}</p>}
        <div className="field card-body" style={{
          maxHeight: '90px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button type="submit" className="btn-submit-lg" style={{
            width: '150px'
          }}>
            Submit</button>
        </div>

      </form>
    </div>
  )
}

export default JobForm