import React from 'react'

export const InputField = ({title,multiline, rows=6, name, formik, className='', showError=false}) => {
  return (
    <div className='w-full'>
         {!multiline ? 
         <>
          <input 
            className={`pl-2 w-full outline-none ${className}`} 
            type="text" 
            placeholder={title}
            name={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {(formik.touched[name] && formik.errors[name] && showError) &&<p className='text-[red] text-[11px]'>* {formik.errors[name]}</p>}
         </>
      :
      <>
      
      <textarea 
        className={`pl-2 w-full outline-none ${className}`} 
        rows={rows} 
        type="text" 
        placeholder={title} 
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
          {(formik.touched[name] && formik.errors[name] && showError) &&<p className='text-[red] text-[11px]'>* {formik.errors[name]}</p>}

      </>
      }     
    </div>
  )
}

export const ButtonRaw = ({text, onClick, className, variants='filled'}) => {
  return (
    <>
    {variants === 'filled' ? <button type="button"
      className={`py-1 rounded-sm w-[70px] text-center text-white hover:opacity-70 bg-[#404040] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
   :
   
   <button type="button"
      className={`py-1 rounded-sm w-[70px] text-center border border-black hover:opacity-70 bg-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  }
    
    </>
  )
}
