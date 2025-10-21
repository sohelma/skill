import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categories.json')
.then((res)=>res.json());

const Categories = () => {
const categories= use (categoryPromise)

    return (
        <div>
            <h1>All Categories ({categories.length})</h1>
            <div className='grid grid-cols-1 mt-5'>
                {categories.map((category)=>(
                 <NavLink key={category.id}className={'btn bg-white border-0 hover:bg-gray-200'}
                 to={`/category/${category.id}`}
                >{category.name}</NavLink>   
                ))}
            </div>
        </div>
    );
};

export default Categories;