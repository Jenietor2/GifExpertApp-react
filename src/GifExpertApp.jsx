
import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [categories, setcategories] = useState(['Metal slug']);
    
    const onAddCategory = (newInputValue)=>{
       
        if(categories.includes(newInputValue)) return;

        setcategories([newInputValue, ... categories]);
    }
    return (
    <>
       
        <h1>GifExpertApp</h1>
       
        <AddCategory onAddNewCategory={onAddCategory}/>
        
            {categories.map( (category) =>(
               <GifGrid 
                        key={category}
                        category={category}
                        ></GifGrid>
            ))}
    </>
  );
}
