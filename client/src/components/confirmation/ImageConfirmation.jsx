/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import './ImageConfirmation.css';
import { StudentSelect } from '../studentSelect/StudentSelect';

export const ImageConfirmation = (props) => {

  const [option, setOption] = useState(null);
  const downloadLink = useRef(null);

  const onSave = () => {
    downloadLink.current.href = props.image;
    downloadLink.current.download = option.value + ".jpg";
    downloadLink.current.click();
    props.onDiscard();
  }

  const onSelectChange = (val) => {
    setOption(val);
  }

  return (
    <div className={'confirmation ' + props.className}>
      <h1 className='text-center'>Confirm Photo</h1>
      <div className='row mt-3'>
        <div className='col'>
          <img src={props.image} className='preview-image mb-2' />
        </div>
        <div className='col mt-3'>
          <div className='d-flex mb-3'>
            <button className="btn btn-danger d-block capture-button me-3" onClick={props.onDiscard}>Retake</button>
            <button className="btn btn-success d-block capture-button" onClick={onSave} disabled={!option}>Download</button>
          </div>
          
          <StudentSelect className={"w-50"} onChange={onSelectChange} />
        </div>
      </div>
      
      

      <a ref={downloadLink} className='d-none' />
    </div>
  );
}