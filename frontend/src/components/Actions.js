import React from 'react';

function Actions( {project} ){
    return (
        <>
        <li>
            <strong>Título:</strong> {project.title}
            <small> <a href="#a">Editar</a> - <a href="#b">Remover</a> </small>
        </li>
        </>

    )
}

export default Actions;