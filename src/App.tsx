
import { Header }   from "./Components/Header";
import { HabitForm } from "./Components/HabitForm";
import { HabitList } from "./Components/HabitList";
import { useState } from "react";

export default function App(){
  //<h1 className="text-Green-1200" >Habbit Tracker</h1>
  const [habits, setHabits] = useState<Habit[]>([])

  function addHabit(name: string) {
    setHabits(curr => [...curr, {id: crypto.randomUUID(), name}])

  }
    function deleteHabit(id: string) {
    setHabits(curr => curr.filter(h => h.id !== id))

  }

  



  return (
    <div className="max-w-2x1 mx-auto p-4 flex flex-col gap-4">
    <Header />
    <HabitForm addHabit = {addHabit} />
    <HabitList deleteHabit={deleteHabit} habits = {habits} />
  </div>
  )
}
// https://github.com/SilverSins3006/HabbitTrackerTutorial.git


