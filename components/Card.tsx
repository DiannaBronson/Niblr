
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export interface ICardProps {
    name: string;
    streetAddress: string;
    foodType: string;
    onYes: () => void;
    onNo: () => void;

}


export default function Card(props: ICardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.foodType}>{props.foodType}</Text>
      <Text style={styles.streetAddress}>{props.streetAddress}</Text>

       <View style={styles.buttonContainer}>
       <Button title= "Yes" onPress= {props.onYes}/>
       <Button title= "No" onPress= {props.onNo}/>
            
       </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'stretch',
    width: '75%',
    aspectRatio: 1,
    borderRadius: 25,
    flexDirection: "column",
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 32,
    paddingBottom: 20,
  
  },
  foodType:{
    fontSize: 15,
    paddingBottom: 20,
  },
  streetAddress:{
    fontSize: 15,
    paddingBottom: 20,
  },
  buttonContainer:{
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  })

