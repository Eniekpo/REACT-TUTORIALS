import './index.css'
import React, { useState } from 'react'
import Employee from './components/Employee';
// import { v4 as uuidv4 } from 'uuid'
import Image from './assets/avarta.png'
import AddEmployee from './components/AddEmployee';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      { id: 1, name: 'Eniekpo', role: 'Manager', img: Image },
      { id: 2, name: 'Ebiowei', role: 'Developer', img: Image },
      { id: 3, name: 'Akpos', role: 'Engineer', img: Image },
      { id: 4, name: 'Eniekpo', role: 'Tech Officer', img: Image },
      { id: 5, name: 'Ebiowei', role: 'Designer', img: Image },
      { id: 6, name: 'Akpos', role: 'Staff', img: Image },
    ]
  )

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees = (updatedEmployees);
  }
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

                < Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              )
            })}
          </div>
          <AddEmployee />
        </>
      ) : (
        <p>You Cannot see the Employees</p>
      )}
    </div>
  );
}

export default App;
