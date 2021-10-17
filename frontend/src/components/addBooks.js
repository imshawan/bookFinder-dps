import React from "react";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import Cancel from '../pngs/cancel.png'
import Checked from '../pngs/checked.png'

const AddBooks = () => {
    const [Response, setResponse] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [respStatus, setrespStatus] = useState('');

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit1 = async (data) => {
        const titleBox = data.title
        const authorBox = data.author
        const pub_date = data.pdate
        const tagsBox = data.tags

        const tags = tagsBox.split(',')
        const data1 = {
        "title": titleBox,
        "author": authorBox,
        "pub_date": pub_date,
        "tags": tags
        }

        const res = await fetch(`http://localhost:3001/api/addBooks`, {
            method: 'POST',
            headers: {
                'Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1)
        });

        const resp = await res.json();

        if(resp.success){
            setResponse(true)
            setisLoading(false)
        } else {
            if (resp.message) {setrespStatus(resp.message)}
            setResponse(false)
            setisLoading(false)
        }

    }

    return (
      <div>
           <header className="w3-container w3-red w3-center" style={{padding:'40px 16px'}}>
                <h3 className="w3-margin w3-jumbo">Add Books.</h3>
            </header>
            <div id="main-content" className="main-content mt-5">
                <div className="add-books" style={{display:`${isLoading ? '' : 'none'}`}}>
                    <form className="action-form mt-5" onSubmit={handleSubmit(onSubmit1)}>
                        <input className="input-content" type="text" placeholder="Enter Title:" id="title" {...register('title', { required: true })} /> {/* register an input */}
                        <input className="input-content" type="text" placeholder="Enter Author:" id="author" {...register('author', { required: true })} />
                        <input className="input-content" type="text" placeholder="Enter Publish Date:" id="pub_date" {...register('pdate', { required: true })} />
                        <input className="input-content" type="text" placeholder="Enter tags: (Separated using a comma)" id="tags" {...register('tags', { required: true })} />
                        <input className="submit-btn mt-5" type="submit" />
                    </form>
                </div>
            </div>
            <section>
            {isLoading ? '' : (
                Response ? (
                    <div class="rt-container">
                        <div class="col-rt-12">
                            <div class="Scriptcontent">
                                <div id='cardss' class="animated fadeIn">
                                <div id='upper-side' className="success">
                                <img src={Checked}/>
                                    <h3 id='status'>
                                    Success
                                    </h3>
                                </div>
                                <div id='lower-side'>
                                    <p id='message'>
                                    Congratulations, your data was posted successfully.
                                    </p>
                                    <a href="/books" id="contBtn" className="success">Continue</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="rt-container">
                        <div class="col-rt-12">
                            <div class="Scriptcontent">
                                <div id='cardss' class="animated fadeIn">
                                <div id='upper-side' className="failed">
                                <img src={Cancel}/>
                                    <h3 id='status'>
                                    Failed
                                    </h3>
                                </div>
                                <div id='lower-side'>
                                    <p id='message'>
                                    Sorry, your data could not be posted correctly. This maybe be caused due to incomplete or incorrect form entries.
                                    </p>
                                    {respStatus ? (
                                        <p id="message"><b>Reason: {respStatus}</b></p>
                                    ) : ''}
                                    <a href="/addBooks" id="contBtn" className="failed">Continue</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
      </section>
    </div>
    );
  }

export default AddBooks;