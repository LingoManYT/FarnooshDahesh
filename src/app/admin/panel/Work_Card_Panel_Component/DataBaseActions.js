'use server'
import axios from "axios"

export async function DeleteProject(UUID) {
    var Error
    await axios.put('http://localhost:3001/api/delete-project', {
        Project_UUID: UUID
    }, {
        headers: {
            Authorization: process.env.TOKEN
        }
    })
        .then(res => {
            if (res.status === 200 && res.data.ok) {
                return 'Project Deleted'
            } else {
                Error = res.data.Message
            }
        })
        .catch(err => {
            Error = err
        })
}