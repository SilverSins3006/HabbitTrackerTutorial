import { type ReactNode} from "react"
import { isSameDay,} from "date-fns";
import { HabitContext } from "./useHabits"
import type { Habit } from "./useHabits"
import { useLocalStorage } from "../hooks/useLocalStorage";


type HabitProviderProps = {
    children: ReactNode

}


export function HabitProvider({children}: HabitProviderProps) {
      //<h1 className="text-Green-1200" >Habbit Tracker</h1>
      const [habits, setHabits] = useLocalStorage<Habit[]>("habits", [])
    
      function addHabit(name: string) {
        setHabits(curr => [...curr, {id: crypto.randomUUID(), name, completions: [] }])
    
      }
        function deleteHabit(id: string) {
        setHabits(curr => curr.filter(h => h.id !== id))
    
      }
    
       function toggleHabit(id: string, date: Date) {
        setHabits(curr => {
          return curr.map(h => {
            if(h.id !== id) {return h}
    
            const alreadyDone = h.completions.some(c => isSameDay(c, date))
            const completions = alreadyDone ? h.completions.filter(c => !isSameDay(c, date)) 
            : [...h.completions, date];
            return {...h, completions}
          })
        }
        )
    
      }


return (
   <HabitContext.Provider
      value={{ habits, addHabit, toggleHabit, deleteHabit }}
    >
      {children}
    </HabitContext.Provider>
)
}

