import React from 'react';

function Actions( {project} ){
    return (
        <>
        <li>
            {project.title} <br />
            <small> <a href="#a">Editar</a> - <a href="#b">Remover</a> </small>
        </li>
        </>

    )
}

export default Actions;