import React from 'react'

export const InputField = ({title,multiline, name, formik, className=''}) => {
  return (
    <div className='w-full'>
         {!multiline ? 
      <input 
        className={`pl-2 w-full outline-none ${className}`} 
        type="text" 
        placeholder={title}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      :
      <textarea 
        className={`pl-2 w-full outline-none ${className}`} 
        rows={6} 
        type="text" 
        placeholder={title} 
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />}     
    </div>
  )
}
