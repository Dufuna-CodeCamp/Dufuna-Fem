import React, {useState} from 'react'

const Index = ({todos, setTodos, setActive}) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input === '') {
            return false
        }
        setTodos([{text: input, completed: false, id: Math.random() * 1000, active: true },...todos])
        setInput('')
        setActive(prevState => prevState + 1)
    }
    
    return (
        <div className='mx-4 d-flex flex-column justify-content-between top-height pb-4 mx-md-0'>
            <header>
                <h1 className='text-uppercase pt-5 mt-4'>todo</h1>
            </header>
            <form onSubmit={handleSubmit} className='text-center'> 
                <input type='text' name='text' value={input} placeholder='Create a new todo...' onChange={handleChange} />
                <button><i className='fas fa-plus text-white' /></button>
            </form>
        </div>
    )
}

export default Index
