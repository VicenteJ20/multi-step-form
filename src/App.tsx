import { Navigate, Route, Routes } from 'react-router-dom';
import SelectPlanPage from './pages/SelectPlan';
import AddOnsPage from './pages/AddOns';
import SummaryPage from './pages/Summary'
import YourInfo from './pages/YourInfo';
import FinishPage from './pages/Finish';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/your-info' />} />
        <Route path='/your-info' element={<YourInfo />} />
        <Route path='/select-plan' element={<SelectPlanPage />} />
        <Route path='/add-ons' element={<AddOnsPage />} />
        <Route path='/summary' element={<SummaryPage />} />
        <Route path='/finish' element={<FinishPage />} />
      </Routes>
    </>
  )
}

export default App;