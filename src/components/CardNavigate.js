import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

export const CardNavigate = ({ title, style }) => {
  return (
    <View style={[styles.layout, style]}>
      <View style={[styles.icon]}></View>
      <View style={styles.content}>
        <Text style={styles.text_content}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 50,
    height: 50,
    alignContent: "center",
    marginLeft: 15,
  },
  layout: {
    width: 80,
    alignContent: "center",
  },
  text_content: {
    textAlign: "center",
    color: "#427194",
  },
});
