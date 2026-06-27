
import { Header }   from "./Components/Header";
import { HabitForm } from "./Components/HabitForm";
import { HabitList } from "./Components/HabitList";
import { HabitProvider } from "./context/HabitProvider";


export default function App(){
  //<h1 className="text-Green-1200" >Habbit Tracker</h1>
  


  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
    <HabitProvider>
    <Header />
    <HabitForm  />
    <HabitList 
     />
     </HabitProvider>
  </div>
  )
}
// https://github.com/SilverSins3006/HabbitTrackerTutorial.git


