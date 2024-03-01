import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ScrollView, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { ProgressiveBar } from "../components/ProgressiveBar";
import { CheckBox } from "../components/CheckBox";

interface HabitProps {
  date: string
}

export function Habit() {
  const route = useRoute()
  const {date} = route.params as HabitProps
  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')


  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100 }}>
        <BackButton />
        <text className="mt-6 text-zinc-400 font-semibold text-base lowercase">{dayOfWeek}</text>
        <text className="text-white font-extrabold text-3xl">{dayAndMonth}</text>
        <ProgressiveBar progress={30}/>
        <View className="mt-6">
          <CheckBox title="Beber agua" checked={false} />
          <CheckBox title="Beber 2L de agua" checked={true} />
        </View>
      </ScrollView>
    </View>
  )
}