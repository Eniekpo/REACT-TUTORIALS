import './index.css'
import React, { useState } from 'react'
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid'
import Image from './assets/avarta.png'

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      { name: 'Eniekpo', role: 'Manager', img: Image },
      { name: 'Ebiowei', role: 'Developer', img: Image },
      { name: 'Akpos', role: 'Engineer', img: Image },
      { name: 'Eniekpo', role: 'Tech Officer', img: Image },
      { name: 'Ebiowei', role: 'Designer', img: Image },
      { name: 'Akpos', role: 'Staff', img: Image },
      { name: 'Ebiowei', role: 'Designer', img: Image },
      { name: 'Akpos', role: 'Staff', img: Image },
    ]
  )
  const showEmployees = true
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => {
            setRole(e.target.value)
          }} />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (

                < Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />
              )
            })}
          </div>
        </>
      ) : (
        <p>You Cannot see the Employees</p>
      )}
    </div>
  );
}

export default App;
