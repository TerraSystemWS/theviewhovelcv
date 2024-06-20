'use client'
import React from 'react'

const CommentForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here if needed
    // You can access form data using e.currentTarget elements
  }

  return (
    <div className="blog__details-left-contact-form">
      <form action="#" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 mb-30">
            <div className="blog__details-left-contact-form-item">
              <i className="fal fa-user"></i>
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
          </div>
          <div className="col-sm-6 sm-mb-30">
            <div className="blog__details-left-contact-form-item">
              <i className="fal fa-envelope"></i>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className="blog__details-left-contact-form-item">
              <i className="fal fa-globe"></i>
              <input
                type="text"
                name="subject"
                placeholder="https://"
                required
              />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className="blog__details-left-contact-form-item">
              <i className="fal fa-pen"></i>
              <textarea
                name="message"
                placeholder="Type your comments...."
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="blog__details-left-contact-form-item">
              <button className="theme-btn" type="submit">
                Post Comment
                <i className="fal fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
