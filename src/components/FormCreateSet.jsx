import './FormCreateSet.css';

export function FormCreateSet(){
    const [name, setName] = React.useState('');

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className='form-label'>
                Название набора:
                <input 
                    className='form-input' 
                    type="text" 
                    name="name" 
                    id='name'
                    value={name}
                    onChange={handleNameChange}/>
            </label>
            <label className='form-label'>
                Описание:
                <textarea className='form-textarea' name="discription" id='discription'/>
            </label>
            <input className='form-inputButton' type="submit" value="Создать сет"/>
        </form>
    );
}