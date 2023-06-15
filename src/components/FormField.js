import React from 'react'

function FormField({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
    handleSizeChange,
    size,
    options
  }) {
    
  return (
    <div className='form_flex'>        
        <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        style={{width:'600px',maxWidth:'100%',padding:'12px', margin:'0 5px 0 0'}}
        required
        />

        <select style={{width: '150px'}} placeholder='Choose a size' value={size} name='size' onChange={handleSizeChange}>
        <option disabled={true} value="">
          Pick a size
        </option>
        {options.map((option) => {
            if(option === 'disabled'){
                <option disabled={true}>{option}</option>
            }
            else{
                return <option value={option}>{option}</option>
            }
            <>
            </>
        })}
        </select>

        {isSurpriseMe && (
        <button
        type="button"
        onClick={handleSurpriseMe}
        className="surprise_btn"
        style={{margin:'0 0 0 5px'}}
        >
        Surprise me
        </button>
        )}
    </div>
  )
}

export default FormField