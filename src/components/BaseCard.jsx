import { useState } from 'react'


export default function BaseCard(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='button'>
            <h3>{props.title}</h3>
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
                {props.title}
            </button>
            {isOpen && <div>{props.description}</div>}
        </div>
    )
}
