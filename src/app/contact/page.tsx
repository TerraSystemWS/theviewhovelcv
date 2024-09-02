'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { sendEmail, Inputs } from '@/utils/mail'
import toast from 'react-hot-toast'

// type Inputs = {
//   name: string
//   email: string
//   phone: number
//   subject: string
//   message: string
// }

const ContactArea: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // aqui sera inserido a logica para enviar email

    try {
      // Await the email sending process
      await sendEmail(data)

      // Provide user feedback on success
      // alert('Email sent successfully!')
      setIsLoading(true)
      toast.success('Email sent successfully!')
    } catch (error) {
      // Handle errors and provide user feedback
      // console.error('Error sending email:', error.message)
      // alert('Failed to send email. Please try again later.')
      // Handle errors and provide user feedback
      if (error instanceof Error) {
        // Safely access error.message
        // console.error('Error sending email:', error.message)
        // alert('Failed to send email. Please try again later.')
        toast.error('Failed to send email. Please try again later.')
        setIsLoading(false)
      } else {
        // Handle unexpected error types
        // console.error('Unexpected error:', error)
        // alert('An unexpected error occurred. Please try again later.')
        toast.error('An unexpected error occurred. Please try again later.')
        setIsLoading(false)
      }
    }

    // Example usage to send an email
  }

  // console.log(watch('name')) // watch input value by passing the name of it
  // console.log(watch('email'))
  // console.log(watch('phone'))
  // console.log(watch('subject'))
  // console.log(watch('message'))

  return (
    <>
      {/* <!-- Page Banner Start --> */}

      <div
        className="page__banner"
        data-background="/assets/img/banner/page-banner-9.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Contact Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Contact Area Start --> */}
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>
                  Get in touch with us to explore all of our exclusive
                  accommodation options and services.
                </p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Emergency Help</span>
                    <h6>
                      <Link href="tel:002389896169">+238 989 61 69</Link>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <Link href="mailto:support@gamil.com">
                        reservas@theviewhotelcv.com
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <Link href="#">
                        Alto Vale dos cavaleiros, Sao Filipe, Fogo{' '}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/TheViewEntertainmentCenter?mibextid=LQQJ4d"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <h3 className="mb-35">Send Massage</h3>
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-sm-6 mb-30">
                      <div className="contact__area-form-item">
                        <i className="fal fa-user"></i>
                        <input
                          type="text"
                          placeholder="Full Name"
                          // required
                          {...register('name', { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 sm-mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-envelope-open"></i>
                        <input
                          type="email"
                          placeholder="Email Address"
                          // required
                          {...register('email', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-phone-alt"></i>
                        <input
                          type="text"
                          placeholder="Phone"
                          // required
                          {...register('phone')}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 sm-mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-address-book"></i>
                        <input
                          type="text"
                          placeholder="Subject"
                          {...register('subject', { required: true })}
                        />
                        {errors.subject && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-comments"></i>
                        <textarea
                          placeholder="Type your comments...."
                          {...register('message', { required: true })}
                        ></textarea>
                        {errors.message && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact__area-form-item">
                        <button
                          className="theme-btn"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? 'successfully!' : 'Submit Now'}
                          <i className="fal fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.234116092137!2d-24.504229424982658!3d14.924044485601604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93617772c2706c5%3A0x978929371573dc05!2sThe%20View%20Entertainment%20Center!5e0!3m2!1spt-PT!2scv!4v1716430731902!5m2!1spt-PT!2scv"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Area End --> */}
    </>
  )
}

export default ContactArea
