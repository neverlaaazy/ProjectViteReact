import { useState } from 'react';
import { useInput } from './UseInput';
import { useForm } from 'react-hook-form';
import './FormCreateSet.css';

export function FormCreateSet(){
    // const [name, setName] = useInput('');
    // const [discription, setDiscription] = useInput('');

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(`Название набора: ${name};\nОписание: ${discription}.`);
    // }

    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div className='form__item'>
                <label htmlFor="name">
                    Название набора:
                </label>
                <input 
                    type="text" 
                    name='name' 
                    id='name'
                    {...register("name",{required:true, minLength:4})}
                />
            </div>
            <div className='form__item'>
                <label htmlFor="discription">
                    Описание:
                </label>

                <textarea 
                    name="discription" 
                    id="discription"
                    {...register("discription",{required:true})}>
                </textarea>

            </div>
            <div className='form__item'>
                <input className='form__item_button' type="submit" value="Создать сет"/>
            </div>
        </form>
    );
}