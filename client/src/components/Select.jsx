import Title from '../data/title'

const Select = ({ label, changeHandler, name, placeholder }) => {
    return (
        <>
            <label
                htmlFor={name}
                className='mb-2 pl-2'>
                {label}
            </label>
            <select
                name={name}
                id={name}
                onChange={changeHandler}
                className='bg-slate-100 rounded-lg px-5 py-2 hover:border-none text-black placeholder:text-black'
            >
                <option value="">{placeholder}</option>
                {Title.map(item => (
                    <option key={item.id} value={item.value}>{item.option}</option>
                ))}
            </select>
        </>
    )
}

export default Select