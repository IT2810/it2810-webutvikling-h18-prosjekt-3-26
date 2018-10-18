import {AsyncStorage} from 'react-native';

export const getFromStorage = async (item) => {
    try {
        const value = await AsyncStorage.getItem(item);
        if (value !== null){
            return value;
        }
    } catch (error) {
        console.error('Could not get from storage');
    }
}
