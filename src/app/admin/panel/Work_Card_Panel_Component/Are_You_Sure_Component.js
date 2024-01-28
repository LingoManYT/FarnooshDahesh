import React from 'react'
import './Are_You_Sure_Component.css'

function Are_You_Sure_Component({ Card_To_Delete }) {
  return (
    <section className='are-you-sure-background'>
        <section className='ask-container'>
            <p>Are you sure you want to delete dawdadwadw?</p>
            <div className='yes-no-buttons-container'>
                <button className='yes-button'>Yes</button>
                <button className='no-button'>No</button>
            </div>
        </section>
    </section>
  )
}

export default Are_You_Sure_Component