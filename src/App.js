import { Header } from "./components/header/Header";
import { MealsSummary } from "./components/meals-summary/MealsSummary";
import { Meals } from "./components/meals/Meals";


function App() {
  return (
    <div >
      <Header/>
      <MealsSummary/>
      <Meals/>
   
      {/* <Header/>
      <MealsSummary/>
      <Meals/>
      <MealItem/> */}
      
    </div> 
  );
}

export default App;
