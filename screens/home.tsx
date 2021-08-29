import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAstroid, getRandomAstroid } from "../redux/action";
import Styles from "../styles/Styles";

type Props = {
  getAstroid: Function;
  getRandomAstroid: Function;
  navigation: {
    navigate: Function;
  };
};

const Home = ({ getRandomAstroid, getAstroid, navigation }: Props) => {
  const [id, setId] = useState("");
  const handleTextChange = (val: string) => {
    setId(val);
  };

  const Submit = () => {
    getAstroid(id, navigation);
  };

  const randomAstroid = () => {
    getRandomAstroid(navigation);
  };
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Enter Asteroid ID"
        onChangeText={handleTextChange}
      />
      <View style={Styles.bottons}>
        <Button title="Submit" onPress={Submit} disabled={false} />
        <Button title="Random Asteroid" onPress={randomAstroid} />
      </View>
    </View>
  );
};

export default connect(null, { getAstroid, getRandomAstroid })(Home);