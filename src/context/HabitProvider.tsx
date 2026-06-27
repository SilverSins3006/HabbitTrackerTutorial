import {Children, createContext, type ReactNode} from "react"
import { useState , useContext} from "react";
import { isSameDay,} from "date-fns";
export type Habit = {id: string; name: string; completions: Date[]}

type Context ={
    
    habits: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

type HabitProviderProps = {
    children: ReactNode

}


export const HabitContext = createContext<null | Context>(null)

export function HabitProvider({children}: HabitProviderProps) {
      //<h1 className="text-Green-1200" >Habbit Tracker</h1>
      const [habits, setHabits] = useState<Habit[]>([])
    
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



    return <HabitContext value= {{habits, addHabit,  toggleHabit,deleteHabit,}}>{children} </HabitContext>
}

export function useHabits(){
 const habitContext = useContext(HabitContext)
 if (habitContext === null) {throw new Error("useHabits must be used within a HabitProvider")}
    return habitContext
}