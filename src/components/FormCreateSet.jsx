import './FormCreateSet.css';

export function FormCreateSet(){
    return (
        <form className="form-Cset">
            <label className='form-Cset-label'>
                Название набора:
                <input className='form-Cset-input' type="text" name="name"/>
            </label>
            <label className='form-Cset-label'>
                Описание:
                <textarea className='form-Cset-textarea' name="discription"/>
            </label>
            <input className='form-Cset-inputButton' type="submit" value="Создать сет"/>
        </form>
    );
}