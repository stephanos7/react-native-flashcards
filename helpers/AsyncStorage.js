import { AsyncStorage } from 'react-native';

export const saveTitle = async (title) => {
  try{
    await AsyncStorage.setItem(title, JSON.stringify({}));
  }
  catch(error){
    console.log(error);
  }
}

export const getAllKeys = async () => {
  try{
    const keys = await AsyncStorage.getAllKeys();
    if(keys !== null){
      alert(JSON.stringify(keys));
    }
  }
  catch(error){
    console.log(error);
  }
}