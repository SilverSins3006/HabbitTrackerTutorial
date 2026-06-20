
import { Header }   from "./Components/Header";
import { HabitForm } from "./Components/HabitForm";
import { HabitList } from "./Components/HabitList";

export default function App(){
  //<h1 className="text-Green-1200" >Habbit Tracker</h1>
  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
    <Header />
    <HabitForm />
    <HabitList />
  </div>
  )
}
// https://github.com/SilverSins3006/HabbitTrackerTutorial.git


