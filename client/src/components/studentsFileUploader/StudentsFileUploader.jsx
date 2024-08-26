/* eslint-disable react/prop-types */
import axios from 'axios';
import { useRef, useState } from "react"

import './StudentsFileUploader.css';

export const StudentFileUploader = (props) => {

  const [file, setFile] = useState();
  const inputRef = useRef();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = '/api/students/upload';
    const formData = new FormData();
    formData.append('students', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    // Send the data over
    axios.post(url, formData, config).then((response => {
      if (response.status !== 200) {
        alert("Response error. Check logs.");
        return;
      }

      alert("Uploaded!");

      inputRef.current.value = null;
      if (props.onUploaded) props.onUploaded();
    }));
  }

  // UI
  return (
    <div>
      <form onSubmit={handleSubmit} className='m-3 upload-form'>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Students CSV File</label>
          <input className="form-control" type="file" id="formFile" onChange={handleChange} required={true} ref={inputRef} />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Upload Students</button>
      </form>
    </div>
  )
}