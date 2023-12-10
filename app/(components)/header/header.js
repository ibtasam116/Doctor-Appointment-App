import React from 'react'

export default function Header(props) {
    return (
        <>
            <header className='text-white bg-[#122E99] h-[40vh] flex items-center'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-[50px] uppercase font-bold hover:text-sky-300 cursor-default inline transition-all'>{props.header_title}</h1>
                </div>
            </header>
        </>
    )
}
