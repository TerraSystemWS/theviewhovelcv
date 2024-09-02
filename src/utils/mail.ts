'use server'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

// Create the transport configuration
const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT, // Ensure port is an integer
  secure: process.env.MAIL_SECURE === 'true', // Convert string to boolean
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options)

// Define the type for inputs
export type Inputs = {
  name: string
  email: string
  phone: number
  subject: string
  message: string
}

// Function to send email
export const sendEmail = async (dto: Inputs) => {
  const { name, email, phone, subject, message } = dto

  try {
    // Send the email
    const info = await transport.sendMail({
      from: process.env.MAIL_USER, // Include sender's name and email address
      to: process.env.MAIL_USER, // Recipient address
      subject: `${name} - ${subject}`, // Add subject
      html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${phone}</p>
      <hr>
      <p>${message}</p>`, // Format the message as HTML
      text: message, // Plain text version of the message
    })

    console.log('Email sent:', info.response)
    return info
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
