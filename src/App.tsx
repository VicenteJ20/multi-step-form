import { Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SelectPlanPage from './pages/SelectPlan';
import AddOnsPage from './pages/AddOns';
import SummaryPage from './pages/Summary';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormPage />} />
        <Route path='/select-plan' element={<SelectPlanPage />} />
        <Route path='/add-ons' element={<AddOnsPage />} />
        <Route path='/summary' element={<SummaryPage />} />
      </Routes>
    </>
  )
}

export default App;