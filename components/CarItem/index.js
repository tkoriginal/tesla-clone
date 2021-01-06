import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import Button from "../Button";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.backgroundImage}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <Button
        type="primary"
        text="Custom Order"
        onPress={() => console.warn("custom order was pressed")}
      />
      <Button type="secondary" text="Existing Inventory"  onPress={() => console.warn("EI was press")}/>
    </View>
  );
};

export default CarItem;
