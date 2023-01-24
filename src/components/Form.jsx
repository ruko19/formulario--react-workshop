import React from 'react'
import BtnSubmit from './BtnSubmit'

const Form = () => {



    return (
        <>
            <div className="form__container">
                <p className="prueba-gratis">
                    <span>Pruebalo gratis 7 dias</span> y luego $ 20 /mes a partir de entonces
                </p>

                <form className='form__contacto'>

                    <div className="form-group">
                        <input type="text" name='nombre' className='form__imputs' placeholder='Nombre' />
                        <img alt="" />
                        <p className='mensaje-error'>El nombre no puede estar vacio</p>
                    </div>

                    <div className="form-group">
                        <input type="text" name='nombre' className='form__imputs' placeholder='Apellido' />
                        <img alt="" />
                        <p className='mensaje-error'>El nombre no puede estar vacio</p>
                    </div>

                    <div className="form-group">
                        <input type="text" name='nombre' className='form__imputs' placeholder='Email' />
                        <img alt="" />
                        <p className='mensaje-error'>El nombre no puede estar vacio</p>
                    </div>

                    <div className="form-group">
                        <input type="text" name='nombre' className='form__imputs' placeholder='Contraseña' />
                        <img alt="" />
                        <p className='mensaje-error'>El nombre no puede estar vacio</p>
                    </div>

                    <BtnSubmit />

                    <p className="condiciones">Al hacer click en el boton usted acepta nuestros
                        <a href="#">Terminos y Servicios.</a>
                    </p>

                </form>




            </div>


        </>



    )
}

export default Form
