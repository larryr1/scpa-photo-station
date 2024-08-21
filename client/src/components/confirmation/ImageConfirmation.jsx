/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './ImageConfirmation.css';

export const ImageConfirmation = (props) => {
  const downloadLink = useRef(null);

  const onSave = () => {
    downloadLink.current.href = props.image;
    downloadLink.current.download = prompt("Enter student ID#:") + ".jpg";
    downloadLink.current.click();
    props.onDiscard();
  }

  return (
    <div className={'confirmation ' + props.className}>
      <h1 className='text-center'>Confirm Photo</h1>
      <img src={props.image} className='preview-image mb-2' />
      <div className='d-flex'>
        <button className="btn btn-danger m-auto d-block capture-button" onClick={props.onDiscard}>Retake</button>
        <button className="btn btn-success m-auto d-block capture-button" onClick={onSave}>Save</button>
      </div>

      <a ref={downloadLink} className='d-none' />
    </div>
  );
}