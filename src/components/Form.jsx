import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnSubmit from './BtnSubmit'
import IconError from '../img/icon-error.svg'
import ShowData from './ShowData'




const Form = () => {
    const [arrayData, setArrayData] = useState([])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setArrayData([...arrayData, data]);
        reset();

    }


    console.log(arrayData);

    return (
        <>
            <div className="form__container">
                <p className="prueba-gratis">
                    <span>Pruebalo gratis 7 dias</span> y luego $ 20 /mes a partir de entonces
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className='form__contacto'>

                    <div className="form-group">
                        <input {...register('nombre', { required: true })} type="text" className='form__imputs' placeholder='Nombre' />
                        {errors.nombre?.type === 'required' &&

                            <div>
                                <p className='mensaje-error'>El nombre no puede estar vacio</p>
                                <img className='error-icon' src={IconError} alt="" />
                            </div>
                        }



                    </div>

                    <div className="form-group">
                        <input {...register('apellido', { required: true })} type="text" name='apellido' className='form__imputs' placeholder='Apellido' />
                        {errors.apellido?.type === 'required' &&

                            <div>
                                <p className='mensaje-error'>El apellido no puede estar vacio</p>
                                <img className='error-icon' src={IconError} alt="" />

                            </div>
                        }

                    </div>

                    <div className="form-group">
                        <input {...register('email', { required: true })} type="text" name='email' className='form__imputs' placeholder='Email' />
                        {errors.email?.type === 'required' &&
                            <div>

                                <p className='mensaje-error'>El Email no puede estar vacio</p>
                                <img className='error-icon' src={IconError} alt="" />
                            </div>
                        }

                    </div>

                    <div className="form-group">
                        <input {...register('contraseña', { required: true })} type="text" name='contraseña' className='form__imputs' placeholder='Contraseña' />
                        {errors.contraseña?.type &&
                            <div>
                                <p className='mensaje-error'>La contraseña no puede estar vacio</p>
                                <img className='error-icon' src={IconError} alt="" />

                            </div>
                        }

                    </div>

                    <BtnSubmit />

                    <p className="condiciones">Al hacer click en el boton usted acepta nuestros
                        <a href="#">Terminos y Servicios.</a>
                    </p>

                </form>

                <ShowData arrayData={arrayData} />




            </div>


        </>



    )
}

export default Form
