'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
const jwt = require('jsonwebtoken')
import { useRouter } from 'next/navigation'


import Check_Icon from '../../../../Icons/check.svg'
import Upload_Icon from '../../../../Icons/upload.svg'
import Add_Icon from '../../../../Icons/plus-black.svg'
import Trash_Icon from '../../../../Icons/trash.svg'
import Sample from '../../../../Logos/Rectangle 3805.png'

// Directions Icons
import Picture_Middle_Text_Left from '../../../../Icons/picture-middle-text-left.png'
import Picture_Middle_Text_Middle from '../../../../Icons/picture-middle-text-middle.png'
import Picture_Middle_Text_Right from '../../../../Icons/picture-middle-text-right.png'

import Picture_Right from '../../../../Icons/picture-right.png'
import Picture_Left from '../../../../Icons/picture-left.png'

function Modal_Form({ TOKEN }) {
    const Router = useRouter()
    const [Sections, AddSections] = useState([])
    const [TemperoryThumbnail, SetTemperoryThumbnail] = useState()
    const [Error, SetError] = useState()

    // const HandleDeletingSection = (deletedElement) => {
    //     const Update = Sections.filter((section) =>
    //         // console.log(section, deletedElement),
    //         section.id !== deletedElement.id
    //     )
    //     AddSections(Update)
    // }

    const AddNewProject = async (e) => {
        e.preventDefault()
        const Data = new FormData()
        Data.append("Project_Type", e.target.project_type_input.value)
        Data.append("Project_Name", e.target.project_name_input.value)
        Data.append("Project_Main_Description", e.target.project_main_description_input.value)
        Data.append("Project_Thumbnail", e.target.project_thumbnail_input.files[0])
        Data.append("Sections", Sections)

        const ThumbnailFileFormat = e.target.project_thumbnail_input.files[0].name.split('.')
        const Thumbnail = new File([e.target.project_thumbnail_input.files[0]], 'thumbnail.' + ThumbnailFileFormat[ThumbnailFileFormat.length - 1])

        var SectionsImages = []
        var SectionsObject = []
        Sections.map((Item, Key) => {
            const ImageName = Item.Image.name.split('.')
            const NewName = 'image-' + Key + '.' + ImageName[ImageName.length - 1]
            const ImageModifiedName = new File([Item.Image], NewName)
            SectionsImages.push(ImageModifiedName)
            Item.Image = NewName
            SectionsObject.push(Item)
        })

        await axios.post('http://localhost:3001/api/create-project', {
            Project_Type: e.target.project_type_input.value,
            Project_Name: e.target.project_name_input.value,
            Project_Main_Description: e.target.project_main_description_input.value,
            Project_Thumbnail: Thumbnail,
            SectionsDetails: JSON.stringify(SectionsObject),
            SectionsImages,
        }, {
            headers: {
                Authorization: TOKEN,
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.status === 200 && res.data.ok) {
                    Router.replace("/admin/panel")
                } else {
                    SetError(res.data.Message)
                }
            })
            .catch(err => { SetError(err) })
    }

    useEffect(() => {
        console.log(Sections)
    }, [Sections])
    return (
        <form encType='multipart/form-data' onSubmit={(e) => { AddNewProject(e) }} className='add-new-project-modal-container'>
            <header className='modal-header-container'>
                <button type='submit' className='add-new-work-button'>
                    <Image src={Check_Icon} alt='check-icon' />
                    <p>Apply</p>
                </button>
            </header>
            <section className='modal-main-section-container'>
                <div className='modal-main-child-container'>
                    <h2>Type</h2>
                    <input type='text' placeholder='Project Type...' name='project_type_input' />
                </div>
                <div className='modal-main-child-container'>
                    <h2>Name</h2>
                    <input type='text' placeholder='Project Name...' name='project_name_input' />
                </div>
                <div className='modal-main-child-container'>
                    <h2>Main Description</h2>
                    <textarea placeholder='Project Main Description...' name='project_main_description_input' />
                </div>
                <div className='modal-main-child-container'>
                    <h2>Thumbnail</h2>
                    <div className='upload-input-container' id='thumbnail-upload-input-container' >
                        <input type='file' name='project_thumbnail_input' onChange={(e) => {
                            SetTemperoryThumbnail(URL.createObjectURL(e.target.files[0]))
                        }} />
                        {
                            TemperoryThumbnail ?
                                <Image src={TemperoryThumbnail} width={0} height={0} alt='user-icon' className='user-picture' id='user-thumbnail' />
                                : null
                        }
                        {
                            TemperoryThumbnail ?
                                null
                                : <div className='texts-container' id='texts-container-thumbnail'>
                                    <Image src={Upload_Icon} alt='upload-icon' className='upload-icon' />
                                    <p>Upload Your Picture Or Click Here</p>
                                </div>
                        }
                    </div>
                </div>
                <div className='modal-main-child-container'>
                    <h2>Sections</h2>
                    <div className='add-section-button' onClick={() => {
                        AddSections(current => [...current, {
                            Image: null,
                            Title: "",
                            Description: "",
                            Class: ""
                        }])
                    }}>
                        <Image src={Add_Icon} alt='add-icon' />
                    </div>
                    <div className='sections-editor-container'>
                        {
                            Sections ?
                                Sections.map((Section, Index) => {
                                    return (
                                        <div className='section-child' key={Index}>
                                            <div className='delete-section-button' key={Index}>
                                                <Image src={Trash_Icon} alt='trash-icon' />
                                            </div>
                                            <div className='modal-main-child-container'>
                                                <h2>Title</h2>
                                                <input type='text' placeholder='Section Title...' onChange={(e) => {
                                                    const CurrentSectionData = Sections.slice(0)
                                                    CurrentSectionData[Index].Title = e.target.value
                                                }} />
                                            </div>
                                            <div className='modal-main-child-container'>
                                                <h2>Subtitle</h2>
                                                <textarea placeholder='Subtitle...' onChange={(e) => {
                                                    const CurrentSectionData = Sections.slice(0)
                                                    CurrentSectionData[Index].Description = e.target.value
                                                }} />
                                            </div>
                                            <div className='modal-main-child-container'>
                                                <h2>Thumbnail</h2>
                                                <div className='upload-input-container' id={'upload-input-container-' + Index}>
                                                    <input type='file' onChange={(e) => {
                                                        const CurrentSectionData = Sections.slice(0)
                                                        CurrentSectionData[Index].Image = e.target.files[0]
                                                        const Upload_Picture_Container = document.getElementById("upload-input-container-" + Index)
                                                        const Uplaod_Picture_Texts_Container = document.getElementById('texts-container-' + Index)
                                                        const Image_Element_Created = document.getElementById('image-for-section-' + Index)
                                                        if (Image_Element_Created) {
                                                            Image_Element_Created.src = URL.createObjectURL(e.target.files[0])
                                                        } else {
                                                            const Image_Element = document.createElement('img')
                                                            Image_Element.src = URL.createObjectURL(e.target.files[0])
                                                            Image_Element.alt = e.target.files[0].name
                                                            Image_Element.className = 'user-picture'
                                                            Image_Element.id = "image-for-section-" + Index
                                                            Uplaod_Picture_Texts_Container.style.display = 'none'
                                                            Upload_Picture_Container.appendChild(Image_Element)
                                                        }
                                                    }} />
                                                    {/* <Image src={Sample} alt='user-icon' className='user-picture' id='user-thumbnail'/> */}
                                                    <div className='texts-container' id={'texts-container-' + Index}>
                                                        <Image src={Upload_Icon} alt='upload-icon' className='upload-icon' />
                                                        <p>Upload Your Picture Or Click Here</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='direction-selection-container'>
                                                <div className='direction-child' onClick={(e) => {
                                                    const CurrentSectionData = Sections.slice(0)
                                                    CurrentSectionData[Index].Class = 'middle-text-left'
                                                    // middle-text-left
                                                    // middle-text-middle
                                                    // middle-text-right
                                                    // middle-text-left2
                                                }} >
                                                    <Image src={Picture_Middle_Text_Left} alt='icon' />
                                                </div>
                                                <div className='direction-child' onClick={(e) => {
                                                    const CurrentSectionData = Sections.slice(0)
                                                    CurrentSectionData[Index].Class = 'middle-text-middle'
                                                    // middle-text-left
                                                    // middle-text-middle
                                                    // middle-text-right
                                                    // middle-text-left2
                                                }} >
                                                    <Image src={Picture_Middle_Text_Middle} alt='icon' />
                                                </div>
                                                <div className='direction-child' onClick={(e) => {
                                                    const CurrentSectionData = Sections.slice(0)
                                                    CurrentSectionData[Index].Class = 'middle-text-right'
                                                    // middle-text-left
                                                    // middle-text-middle
                                                    // middle-text-right
                                                    // middle-text-left2
                                                }} >
                                                    <Image src={Picture_Right} alt='icon' />
                                                </div>
                                                <div className='direction-child' onClick={(e) => {
                                                    const CurrentSectionData = Sections.slice(0)
                                                    CurrentSectionData[Index].Class = 'middle-text-left2'
                                                    // middle-text-left
                                                    // middle-text-middle
                                                    // middle-text-right
                                                    // middle-text-left2
                                                }} >
                                                    <Image src={Picture_Left} alt='icon' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                : null
                        }
                    </div>
                </div>
            </section>
        </form>
    )
}

export default Modal_Form