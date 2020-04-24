import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import CalculatorGroup from "../components/CalculatorGroup";
import CalculateButton from "../components/CalculateButton";
import CardPopUp from "../components/CardPopUp";

const CalculatorScreen = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [yearsToPay, setYearsToPay] = useState(5);
  const [interestRate, setInterestRate] = useState(7.0);
  const [deposit, setDeposit] = useState(0);
  const [totalMonthlyRepayment, setTotalMonthlyRepayment] = useState(0);

  const calculate = () => {
    const newInterest = interestRate / 100;
    const total = ((purchasePrice - deposit) * newInterest) / (yearsToPay * 12);
    setTotalMonthlyRepayment(Math.round(total));
  };

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.titleStyle}>BOND PAYMENT CALCULATOR</Text>

        <CalculatorGroup
          label="Purchase Price"
          min={0}
          max={3000000}
          step={10000}
          onValChanged={setPurchasePrice}
        />

        <CalculatorGroup
          label="Years to pay"
          min={5}
          max={30}
          step={5}
          onValChanged={setYearsToPay}
        />

        <CalculatorGroup
          label="Interest rate"
          min={7}
          max={14}
          step={0.1}
          onValChanged={setInterestRate}
        />

        <Text style={styles.textStyle}>Deposit</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            value={deposit.toString()}
            onChangeText={(input) => setDeposit(input)}
          />
        </View>

        <CalculateButton calculate={calculate} />
      </ScrollView>
      {totalMonthlyRepayment ? (
        <CardPopUp total={totalMonthlyRepayment} screen="calculator" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    marginBottom: 20,
    color: "#516F6F",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  textStyle: {
    color: "gray",
    marginHorizontal: 30,
  },
  textInputContainer: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 30,
    paddingStart: 5,
  },
  errorMessage: {
    color: "red",
    marginHorizontal: 30,
  },
});

export default CalculatorScreen;
