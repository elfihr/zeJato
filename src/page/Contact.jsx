import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center py-12 text-white ' id='contact'>
            <h3 className='text-5xl font-semibold text-sky-500 text-center'>Dúvidas?</h3>
            <p className='text-3xl my-8 text-center'>Mande uma <span className='text-sky-500'>Mensagem para Gente!</span></p>
            <form method='POST' className='flex flex-col gap-4 items-center'>
                <div className='flex gap-4 inputContainer'>
                    <input type='name' placeholder='Nome Completo*' required></input>
                    <input type='email' placeholder='E-mail*' required></input>
                </div>
                <div className='flex gap-4 inputContainer'>
                    <input type='number' placeholder='Telefone*' required></input>
                    <input type='text' placeholder='Assunto*' required></input>
                </div>
                <textarea className='textarea' rows={6} placeholder='Digite sua Dúvida*' name='message' required></textarea>
                <button className='bg-sky-500 hover:bg-black p-4 w-48 duration-300 active:scale-95' type='submit'>Enviar Menssagem</button>
            </form>
        </div>
    )
}

export default Contact