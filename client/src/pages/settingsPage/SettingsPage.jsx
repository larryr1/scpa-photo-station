import axios from 'axios';
import { useEffect, useState } from 'react';
import { StudentFileUploader } from '../../components/studentsFileUploader/StudentsFileUploader';

import './SettingsPage.css';

export const SettingsPage = () => {

  const [students, setStudents] = useState([]);

  const refreshDataset = () => {
    const url = '/api/students/search';

    // Send the data over
    axios.post(url, {"returnAll": true}).then((response => {
      setStudents(response.data);
    }));
  }

  useEffect(() => {
    refreshDataset();
  }, []);

  const handleUploaded = () => {
    refreshDataset();
  }
  

  return (
    <div className='settings-page'>
      <h1>Students File Upload</h1>
      <p>Upload a CSV file of all your students to enable the search function.</p>
      <p>The file should have columns in the following order. Column names are case-sensitive. For the grade field, it does not matter if the value has a leading zero or not as it is automatically removed.</p>

      <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">lastName</th>
          <th scope="col">firstName</th>
          <th scope="col">grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5620000000</td>
          <td>Doe</td>
          <td>John</td>
          <td>08</td>
        </tr>
      </tbody>
    </table>
    <StudentFileUploader onUploaded={handleUploaded} />
    <h2>Stats</h2>
    <p><b>Students in dataset now:</b> {students.length}</p>
    </div>

    
    
  )
}