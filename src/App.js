import './App.css';
import "./Assfeb8.css";
import Todo from './Todo';
import AvgNmbrs from './AverageNmbrs';
import AddNos from './AddNos';
import MiniCalc from './MiniCalculator';
function App() {
  return (
    <div>
    <div>
   <Todo></Todo>
   <AvgNmbrs></AvgNmbrs>
   </div>
   <div>
     <AddNos Num1={4} Num2={5}></AddNos>
   </div>
   <div>
     <MiniCalc no1={5} no2={6} Operation = "Multiply"></MiniCalc>
   </div>
   </div>
  );
}

export default App;
