import React,{useState} from 'react'

function FilterList() {
    
    const data=[
        {id: "uniq1", title:"gena"}, 
        {id: "uniq2", title:"alex"}, 
        {id: "uniq3", title:"Victor"},
        {id: "uniq4", title:"max"},
        {id: "uniq5", title:"ola"},
        {id: "uniq6", title:"igor"},
        {id: "uniq7", title:"Ann"},
        {id: "uniq8", title:"vova"},
        {id: "uniq9", title:"toma"},
        {id: "uniq10", title:"Dima"},
        {id: "uniq11", title:"sergey"}, 
        
    ]

    const names=data.map(el=>el.title)
    console.log(names)
    
    const[filter,SetFilter]=useState('');

    let filteredNames=names.filter(name=>{
        return name.toUpperCase().includes(filter.toUpperCase())
    })



    return (
        <div style={{marginTop:'20px'}}>
            <input type="name"
                onChange={(e)=>SetFilter(e.target.value)} 
                placeholder="filter" 
                className="input" 
                style={{margin:'0',
                borderRadius:'5px',
                height:'30px',
                width:'200px'

        }}/>
            <div className="content">
                <ul>
                    {filteredNames.map((item,idx)=>(<li key={idx} style={{listStyle:'none', fontSize:'18px'}}>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default FilterList
