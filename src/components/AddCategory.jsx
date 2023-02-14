import {useState} from 'react';

export const AddCategory = ({onAddNewCategory})=>{
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;
        
        onAddNewCategory(inputValue.trim());

        setInputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="buscar gif..."
                value={inputValue}
                onChange={onInputChange}>                    
            </input>
        </form>
    );
}