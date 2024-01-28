import './Add_New_Work_Modal.css'
import Modal_Form from './Modal_Form'


const test = {
    Image: "Untitled-1.png",
    Title: "Image Title",
    Description: "Progrenstead.",
    Class: "middle-text-left2"
}

function Add_New_Work_Modal() {
    return (
        <div className='modal-background'>
            <Modal_Form TOKEN={process.env.TOKEN}/>
        </div>
    )
}

export default Add_New_Work_Modal