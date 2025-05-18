import React from 'react'

const ContactForm = ({handleChange, formData, handleSubmit, editIndex}) => {
  return (
    <>
    <div>Contact Form</div>
    <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <input type="text" name="name" placeholder='Name' onChange={handleChange} value={formData.name}/>
        <input type="text" name="phone" placeholder='Phone' onChange={handleChange} value={formData.phone}/>
        <input type="text" name="email" placeholder='Email' onChange={handleChange} value={formData.email}/>
        <input type="text" name="bio" placeholder='Bio' onChange={handleChange} value={formData.bio}/>
        <button type='submit' onClick={handleSubmit}>{editIndex !== null ? 'Update Contact' : 'Add Contact'}</button>
    </form>
    </>
  )
}

export default ContactForm