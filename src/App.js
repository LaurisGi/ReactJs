import './App.css';
import { Header } from "../src/Header/Header"
import { Footer } from "../src/Footer/Footer"
import Employees from "../src/Employees/Employees"
import { useState } from 'react';

function App() {

  const [selectedTeam, setTeam] = useState("TeamB");
    
  const [employees, setEmployees] = useState([{
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }])

    function handleTeamSelectionChange(event)
    {
      setTeam(event.target.value);
    }

    function handeEmployeeCardClick(event){
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
        ? (employee.teamName === selectedTeam) ? {...employee, teamName:''} : {...employee, teamName: selectedTeam }
        : employee);
      setEmployees(transformedEmployees);
      
    }

  return (
    <div className='App'>
      <Header/>
      <Employees employees={employees}
                selectedTeam={selectedTeam}
                handeEmployeeCardClick={handeEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
                 />
      <Footer/>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
    </div>
  );
}

export default App;
