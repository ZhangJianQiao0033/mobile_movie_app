import {View, Text} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const movieDetail = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>{id}</Text>
            <Text>movieDetail</Text>
        </View>
    )
}
    export default movieDetail
