import { useState } from "react"
import { Header } from "./Components/Header"
import { HabitForm } from "./Components/HabitForm"
import { HabitList } from "./Components/HabitList"
import { HabitProvider } from "./context/HabitProvider"
import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  eachDayOfInterval,
} from "date-fns"

export default function App() {
  const [weekOffset, setWeekOffset] = useState(0)
  const week = addWeeks(new Date(), weekOffset)

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  })

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <HabitProvider>
        <Header visibleDates={visibleDates} />
        <HabitForm />
        <HabitList />
      </HabitProvider>
    </div>
  )
}