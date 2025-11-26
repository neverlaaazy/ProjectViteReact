import './FormCreateSet.css';

export function FormCreateCard(){
    return(
        <form className='form'>
            <label className='form-label'>
                Передняя сторона карточки:
                <input className='form-input' type="text" name="fronttext"/>
            </label>
            <label className='form-label'>
                Задняя сторона карточки:
                <input className='form-input' type="text" name="backtext"/>
            </label>
            <input className='form-inputButton form-InBuCard' type="submit" value="Создать карточку"/>
        </form>
    );
}