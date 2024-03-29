import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";

interface CheckBoxProps extends TouchableOpacityProps {
  checked?: boolean
  title: string
}

export function CheckBox({title, checked = false, ...rest}: CheckBoxProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {
        checked ? 
        <View>
          <Feather name="check" size={20} color={colors.white} />
        </View> :
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      }
      <Text className="text-white text-base ml-3 font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}