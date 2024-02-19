import { useEffect, useState } from "react"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"
import { api } from "../lib/api"
import dayjs from "dayjs"

const weekDays = ['Dom', 'Seg', 'Terç', 'Qua', 'Qui', 'Sext', 'Sab']
const summaryDates = generateDatesFromYearBeginning()
const minimumSumaryDatesSize = 18 * 7 //18 weeks
const amountOfDaysToFill = minimumSumaryDatesSize - summaryDates.length

type Summary = {
  id: string
  date: string
  amount: number
  completed: number
}[]

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center mr-4">
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })

          return <HabitDay
          amount={dayInSummary?.amount}
          completed={dayInSummary?.completed}
          key={date.toString()}
          date={date}
          />
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
          return (
            <div key={i} className="bg-zinc-900 h-10 w-10 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
          )
        })}
      </div>

    </div>
  )
}