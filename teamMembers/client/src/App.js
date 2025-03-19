import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import GroupedMembers from './components/GroupedMembers';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import NotFound from './components/NotFound';
function App() {
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB')
  const [employeeList, setEmployeeList] = useState(JSON.parse(localStorage.getItem('employeeList')) ||
  [{
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
    }
  ])

  useEffect(()=>{
    localStorage.setItem('employeeList', JSON.stringify(employeeList))
  },[employeeList])
 
  useEffect(()=>{
    localStorage.setItem('selectedTeam', JSON.stringify(team))
  },[team])

  const handleTeamChange = (e) => {
    setTeam(e.target.value)
  }

  const handleCardClick = (e) => {
    const newTeam = employeeList.map((employee) => (employee.id === parseInt(e.currentTarget.id))
       ? (employee.teamName === team) ? {...employee, teamName:''} : {...employee, teamName:team} : employee )
        setEmployeeList(newTeam)
       
   }
   let memberCount = employeeList.filter((employee) => (employee.teamName === team)).length
   
 
  return (
   <Router>
     <div className="App">
     <Nav/>
      <Header team={team}
              teamMemberCount={memberCount}    
        />
      <Routes>
        <Route path='/' element={ <Employees employeeList={employeeList} 
                  team={team} 
                  handleCardClick={handleCardClick}
                  handleTeamChange={handleTeamChange}  
       />}></Route>
       <Route path='/groupedMembers' element={<GroupedMembers 
       employees={employeeList}
       team={team}
       setTeam={setTeam}
       />}></Route>
       <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
   </Router>
  );
}

export default App;
