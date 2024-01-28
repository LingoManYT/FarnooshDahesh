import React from 'react'
import Work_Card_Component from './Work_Card_Component/Work_Card_Component'

function Server_Sidde_Tags({ Works }) {
    return (
        <>
            <div className='work-list-container'>
                {
                    Works ? 
                    Works.map((Work, Index) => {
                        return <Work_Card_Component Data={Work} key={Index}/>
                    })
                    : null
                }
            </div>
            <a href='#' className='see-more-link'>See More</a>
        </>
    )
}

export default Server_Sidde_Tags