import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Style } from '../../Contexts/Theme';
import { TextCuston } from '../../Components/TextInput';
import { ButtonCuston } from '../../Components/Button';
import { setData, getData } from "../../Contexts/Data";
import { useState, useEffect } from 'react';

export const Login = ({ navigation }) => {
    const [error, setError] = useState('')
    const [form, setForm] = useState('')
    var data = {}

    useEffect(() => {
        const findData = (value) => {
            data = value
            console.log(data)
        }
        getData(findData, 'user')
    })

    const Validate = () => {
        
        return (form.user && form.pass) ? true : false
    }
    const next = () => {
        data.login = true
        setData('user', data)
        navigation.navigate('Routes')
    }
    const onPress = () => {
        (Validate()) ?
            next(form) :
            setError('Cadastro invalido')
    }
    const CallBack = (key, data) => {
        var clone = Object.assign({}, form);
        clone[key] = data
        setForm(clone)
    }

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Login</Text>
            <TextCuston
                name='user'
                CallBack={CallBack}
                value={form.name}
                placeholder='User' />
            <TextCuston
                name='pass'
                CallBack={CallBack}
                value={form.pass}
                placeholder='Password' />
            <Text style={Style.error}>{error}</Text>
            <ButtonCuston
                onPress={onPress}
                placeholder='Cadastrar'
            />
            <StatusBar style="auto" />
        </View>
    );
}