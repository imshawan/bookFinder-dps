import React from "react";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import Cancel from '../pngs/cancel.png'
import Checked from '../pngs/checked.png'

const AddBooks = () => {
    const [Response, setResponse] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [respStatus, setrespStatus] = useState('');
    const [postData, setpostData] = useState(false);

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    const onSubmit1 = async (data) => {
        setpostData(true)
        const titleBox = data.title
        const authorBox = data.author
        const pub_date = data.pub_date
        const tagsBox = data.tags

        const tags = tagsBox.split(',')
        
        if (tags.length > 4) {alert("Only 4 tags max is allowed"); return;}

        const data1 = {
        "title": titleBox,
        "author": authorBox,
        "pub_date": pub_date,
        "tags": tags
        }

        const res = await fetch(`https://bookfinder-dps.herokuapp.com/api/addBooks`, {
            method: 'POST',
            headers: {
                'Origin': 'https://bookfinder-dps.netlify.app',
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
            <div id="main-content" className="main-content">
                <div className="add-books" style={{display:`${isLoading ? '' : 'none'}`}}>
                    <form className="action-form mt-5" onSubmit={handleSubmit(onSubmit1)}>
                        <input className="input-content" type="text" placeholder="Enter Title:" id="title" {...register('title', { required: true })} />
                        {errors.title && <p>Title is required</p>}
                        <input className="input-content" type="text" placeholder="Enter Author:" id="author" {...register('author', { required: true })} />
                        {errors.author && <p>Must enter author name</p>}
                        <input className="input-content" type="text" placeholder="Enter Publish Date:" id="pub_date" {...register('pub_date', { required: true })} />
                        {errors.pub_date && <p>Publishing date is required</p>}
                        <input className="input-content" type="text" placeholder="Enter tags: (Separated using a comma)" id="tags" {...register('tags', { required: true })} />
                        {errors.tags && <p>Atleast one tag is required</p>}
                        <input className="submit-btn mt-3" type="submit" />
                        <p id="posting-data" style={{textAlign: 'center', position: 'relative', marginTop: '5px'}}>{postData ? 'Please wait while we upload your data!' : ''}</p>
                    </form>
                </div>
            </div>
            <section>
            {isLoading ? '' : (
                Response ? (
                    <div className="rt-container">
                        <div className="col-rt-12">
                            <div className="Scriptcontent">
                                <div id='cardss' className="animated fadeIn">
                                <div id='upper-side' className="success">
                                <img src={Checked} alt="Success"/>
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
                    <div className="rt-container">
                        <div className="col-rt-12">
                            <div className="Scriptcontent">
                                <div id='cardss' className="animated fadeIn">
                                <div id='upper-side' className="failed">
                                <img src={Cancel} alt="Failed"/>
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