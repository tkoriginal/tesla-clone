import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

import CarItem from "../CarItem";
import styles from "./style";
import carsData from "../../Data/cars";

const Carlist = () => {
  console.log(carsData);
  return (
    <View style={styles.container}>
      <FlatList
        data={carsData}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.name}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Carlist;
