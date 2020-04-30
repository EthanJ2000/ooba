import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as actions from "../actions";
import InitialAuthDisplay from "../components/InitialAuthDisplay";
import SignUp from "../components/SignInSignUp/SignUp";

class AuthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpPressed: false,
    };
  }

  componentDidMount() {
    this.props.facebookLogin().catch((err) => {
      console.log(err);
    });
    this.onAuthComplete(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete = (props) => {
    console.log(props);
    if (props.token) {
      console.log("navigate");
      this.props.navigation.navigate("Dashboard");
    }
  };

  onBackPressed = () => {
    this.setState({ signUpPressed: false });
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/ooba_background.png")}
      >
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={styles.card}>
          {this.state.signUpPressed ? (
            <SignUp onBackPressed={this.onBackPressed} />
          ) : (
            <InitialAuthDisplay
              props={this.props}
              navigation={this.props.navigation}
            />
          )}
        </View>
        <Text style={[styles.text, { paddingTop: 10 }]}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({ signUpPressed: true });
          }}
        >
          <Text style={[styles.text, { fontWeight: "bold" }]}>SIGN UP</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#6ABD45",
    height: 400,
    minHeight: "50%",
    resizeMode: "stretch",
  },
  logo: {
    alignSelf: "center",
    width: 150,
    height: 150,
    marginTop: 40,
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 50,
    marginHorizontal: 10,
    height: 450,
    elevation: 3,
  },
  text: {
    color: "#6ABD45",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 15,
  },
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
