import React from "react";
import "./Paginado.css"

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers = []


    for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i + 1);

    }

    return (

        <div>
            <ul className="paginado ">
                {
                    pageNumbers && pageNumbers.map(number => {
                        return (
                            <li className="estilo" onClick={() => paginado(number)}>
                                <a style={{fontFamily: "cursive"}}>{number}</a>
                            </li>

                        )

                    })
                }
            </ul>
        </div>
    )
}