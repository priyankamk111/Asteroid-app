import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Styles from "../styles/Styles";

const AstroidDetails = (astroid: any) => {
  return (
    <View style={Styles.astroidDetails}>
      {/* <Text>Astroid Details Screen!!!</Text> */}
      {/* <Text>{JSON.stringify(astroid.astroid)}</Text> */}
      <View>
        <Text>
          <Text style={Styles.btext}>Name: </Text>
          <Text>{astroid.astroid.name}</Text>
        </Text>
      </View>
      <View>
        <Text>
          <Text style={Styles.btext}>Nasa JPL URL: </Text>
          <Text>{astroid.astroid.nasa_jpl_url}</Text>
        </Text>
      </View>
      <View>
        <Text>
          <Text style={Styles.btext}> is_potentially_hazardous_astroid: </Text>
          <Text>
            {astroid.astroid.is_potentially_hazardous_astroid ? "YES" : "NO"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ astroid: state.reducer.astroid });

export default connect(mapStateToProps)(AstroidDetails);