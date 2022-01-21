import React from 'react';
import {useState} from 'react'
import { v1 as uuidv1} from 'uuid'

function EmployeeForm({addItem,posts}) {

    const [name,setName] = useState('')
    const [website,setWebsite] = useState('')

    const handleSubmit = (e) => {
        let id = uuidv1()
        e.preventDefault();
        addItem({id,name,website})
        console.log({id,name,website})
        setName('')
        setWebsite('')
    }
  return(          
    <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Entrer le nom..." onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type="text" id="website" placeholder="Entrer le site.." onChange={(e)=>setWebsite(e.target.value)} value={website}/>
        <input type="submit" value="Add" />
    </form>
  );
}

export default EmployeeForm;
