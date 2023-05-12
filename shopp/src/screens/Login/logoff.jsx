import { View } from "react-native";
import { getData, setData } from "../../Contexts/Data";
import { useEffect } from 'react';
import { set } from "react-native-reanimated";

export const Logoff = ({ navigation }) => {
    useEffect(() => {
        const findData = (value) => {
            value.login = false
            setData('user', value)
            navigation.navigate('Login')
        }
        getData(findData, 'user')
    })

    return (
        <View></View>
    );
}