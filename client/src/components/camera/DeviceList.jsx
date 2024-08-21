/* eslint-disable react/prop-types */
import { useState, useCallback, useEffect, useRef } from "react"
import Webcam from "react-webcam";
import Select from "react-select";
import clickSound from './camera.mp3';

import './DeviceList.css';

export const DeviceList = (props) => {
  const [deviceId, setDeviceId] = useState(null);
  const [devices, setDevices] = useState([]);
  const webcamRef = useRef(null);

  const handleDevices = useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  const handleDeviceSelectChange = (option) => {
    setDeviceId(option.value);
  }

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (props.onCapture) props.onCapture(imageSrc);
      new Audio(clickSound).play();
    },
    [webcamRef]
  );

  return (
    <div className={props.className}>
      <Webcam audio={false} videoConstraints={{ deviceId: deviceId}} className="webcam-container" ref={webcamRef} />

      <Select className="text-black select-control" options={ devices.map((device) => { return { value: device.deviceId, label: device.label }})} onChange={handleDeviceSelectChange} />
      <button onClick={capture} className="btn btn-success btn-lg m-auto d-block mt-5 p-3 capture-button">Capture photo</button>
    </div>
  )

}