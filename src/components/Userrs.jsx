import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Userrs = () => {
    const loader=useLoaderData();
    // console.log(loader);
    return (
        <div>
            <h1>User {loader.length}</h1>
            {
                loader.map(load=><p key={load.id}><Link to={`/users/${load.id}`}>{load.name}</Link></p>)
            }
        </div>
    );
};

export default Userrs;