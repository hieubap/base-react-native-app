import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CardCollapse from "../../components/CardCollapse";

const AccountInfo = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#237eb8" }}>
      <View
        style={{
          //   backgroundColor: "#0a639b",
          padding: 15,
          height: 50,
          flexDirection: "row",
        }}
      >
        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/image/back-icon.png")}
              style={{ width: 20, height: 15 }}
            />
            <Text
              style={{
                color: "white",
                marginLeft: 10,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Tài khoản
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <CardCollapse />
      </View>
      <View style={styles.container}>
        <Text>TÀI KHOẢN</Text>
        <Text style={{ fontWeight: "bold" }}>MÀN NÀY VERSION 2.0 SẼ CÓ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AccountInfo;
