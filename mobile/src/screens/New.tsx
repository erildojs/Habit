import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { useState } from "react";
import colors from "tailwindcss/colors";
import {Feather} from '@expo/vector-icons'


const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo']

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([])
  function handleToggleWeekDay(weekDayIndex: number) {
    if(weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}} >
      <BackButton />
      <Text className="mt-6 text-white font-extrabold text-3xl">Criar Habito</Text>
      <Text className="mt-6 text-white font-semibold text-base">Qual seu comprometimento?</Text>
      <TextInput placeholder="Exercicios, dormir bem, etc..." placeholderTextColor={colors.zinc[400]} className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600" />
      <Text className="font-semiblod mt-4 mb-3 text-white text-base">Qual a recorrencia?</Text>
      {availableWeekDays.map((weekDay, index) => (
        <CheckBox key={weekDay} checked={weekDays.includes(index)} title={weekDay} onPress={() => handleToggleWeekDay(index)} />
      ))}
      <TouchableOpacity className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6">
        <Feather name="check" size={20} color={colors.white}/>
        <Text className="font-semibold text-base text-white ml-2">Confirmar</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}