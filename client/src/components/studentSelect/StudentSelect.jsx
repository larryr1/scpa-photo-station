/* eslint-disable react/prop-types */
import AsyncSelect from 'react-select/async';
import axios from 'axios';

const loadOptions = (inputValue, callback) => {
  const url = '/api/students/search';

  // Send the data over
  axios.post(url, {"query": inputValue}).then((response => {
    var values = [];
    response.data.forEach(r => {
      values.push({ value: new String(r.id), label: new String(`${r.lastName}, ${r.firstName} | ${r.id}`) })
    });
    //alert(JSON.stringify(values))
    callback(values.slice(0, 14));
  }));
};

export const StudentSelect = (props) => {

  const handleChange = (val) => {
    if (props.onChange) props.onChange(val);
  }

  return (
    <AsyncSelect loadOptions={loadOptions} defaultOptions={true} className={"text-black " + props.className} onChange={handleChange} />
  )
}