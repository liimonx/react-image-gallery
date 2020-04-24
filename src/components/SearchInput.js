import React, {useState} from 'react'
import closeIcon from '../assets/svg/closeIcon.svg'

const SearchInput = ({ inputText }) => {
    const [text, setText] = useState('')

    const updateText = (e) => {
        e.preventDefault()
        inputText(text)
    }

    const clearInput = (e)=>{
        e.preventDefault()
        setText('')
        inputText('')
        document.querySelector('.c-search-form__input').value = ''
    }


    return (
       <React.Fragment>
           <form onSubmit={updateText} className="c-search-form">
               <div className="c-search-form__group">
                   <input onChange={e =>{ 
                        setText(e.target.value)
                        updateText(e)
                    }} className="c-search-form__input c-input" placeholder="Search" />
                    {text.length > 0 && <div className='c-search-form__input-clear' onClick={e => clearInput(e)}><img src={closeIcon} alt=''/></div>}
               </div>
           </form>
       </React.Fragment>
    )
}

export default SearchInput
