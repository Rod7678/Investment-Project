export default function UserInput({name, label,value, onChangeValue}){

       function handleChange (e) {
        const update = {
            [name] : +e.target.value
        }
             onChangeValue(update);
         }

    return (
        
                <p>
                    <label htmlFor={name}>{label}</label>
                    <input type="number" name={name} value={value} required onChange={handleChange}/>
                </p>
    )
}