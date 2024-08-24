import  { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../lib/database/Database.mjs';
import { useEffect, useState } from 'react';

export const SettingsPage = () => {

  const studentById = useLiveQuery(
    () => db.students.where("grade").belowOrEqual(25).sortBy("id")
  );
  
  const [studentSearch, setStudentSearch] = useState(null);


    return (
      <ul>
        {JSON.stringify(student)}
      </ul>
    )
}