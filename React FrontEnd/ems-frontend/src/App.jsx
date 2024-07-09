import './App.css'
import DepartmentComponent from './components/Departmentcomponent'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:5173  */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>

          {/* //http://localhost:5173/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>

          {/* //http://localhost:5173/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>

          {/* //http://localhost:5173/edit-employee/1 */}
          <Route path='/edit/employee/:id' element={<EmployeeComponent />}></Route>

          {/* //http://localhost:5173/departments */}
          <Route path='/departments' element={<ListDepartmentComponent/>}></Route>

          {/* //http://localhost:5173/edit-department/1 */}
          <Route path='/edit-department/:id' element = { <DepartmentComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
