import React from 'react'

function Server_Side_Tags() {
    return (
        <>
            <section className='texts-and-download-container'>
                <h1>About me</h1>
                <div className='download-button-container'>
                    <span></span>
                    <a href='https://api.farnooshdahesh.com/Assets/Resume.pdf' target='_blank' download>Download CV</a>
                </div>
                <p>I am student at Hyper Island. My journey started with buildings and how to make them, shifted to making interior spaces awesome, and eventually led me to UX/UI design, which I absolutely love. Designing cool and user-friendly stuff isn&apos;t just a job, it&apos;s my passion. I enjoy working in teams, learning from others, and always aim to upgrade my skills with each project. The mix of creativity and technology gets me excited, and I&apos;m eager to contribute my skills to create awesome experiences in future projects...</p>
            </section>
            <section className='proggress-bar-container'>
                <div className='progress-bar'>
                    <label>Figma</label>
                    <progress value={0.9} />
                </div>
                <div className='progress-bar'>
                    <label>Adobe XD</label>
                    <progress value={0.7} />
                </div>
                <div className='progress-bar'>
                    <label>Adobe illustrator</label>
                    <progress value={0.8} />
                </div>
                <div className='progress-bar'>
                    <label>Adobe InDesign</label>
                    <progress value={0.75} />
                </div>
                <div className='progress-bar'>
                    <label>Adobe Photoshop</label>
                    <progress value={0.77} />
                </div>
            </section>
        </>
    )
}

export default Server_Side_Tags
