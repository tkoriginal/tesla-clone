import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import Button from "../Button";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car
  console.log(props.car)
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          type="primary"
          text={taglineCTA}
          onPress={() => console.warn("custom order was pressed")}
        />
        <Button
          type="secondary"
          text="Existing Inventory"
          onPress={() => console.warn("EI was press")}
        />
      </View>
    </View>
  );
};

export default CarItem;
