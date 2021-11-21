import { withNavigation } from "@react-navigation/compat";
import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { CardNavigate } from "../../components/CardNavigate";
import { feature, middleHeader, order } from "./constant";
import { promotion, promotion2 } from "./data";
import styles from "./styles";

const { width, height } = Dimensions.get("screen");

const Home = ({ updateData, navigation, ...props }) => {
  return (
    <View style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.layoutTop}></View>

        <View style={styles.middle_header}>
          {middleHeader.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              style={{
                alignItems: "center",
                width: 100,
              }}
              onPress={() => (item.screen ? navigation.push(item.screen) : {})}
            >
              <Image
                source={item.image}
                style={{ width: 48, resizeMode: "contain" }}
              />
              <Text style={styles.middle_text}>{item.title}</Text>
            </TouchableWithoutFeedback>
          ))}
          <View
            style={{
              borderLeftColor: "#f1f2f4",
              borderColor: "#f1f2f4",
              alignItems: "center",
              top: 10,
              height: 60,
              width: 100,
              position: "absolute",
              borderLeftWidth: 2,
              borderRightWidth: 2,
            }}
          ></View>
        </View>

        <Text style={styles.title_group}>Tính năng</Text>
        <View style={styles.group_card_feature}>
          {feature.map((item, index) => (
            <CardNavigate
              key={index}
              title={item.title}
              style={{
                marginBottom: 10,
                marginLeft: (width - 80 * 4 - 20) / 8,
                marginRight: (width - 80 * 4 - 20) / 8,
              }}
              icon={item.icon}
            />
          ))}
        </View>
        <Text style={styles.title_group}>Ưu đãi & Khuyến mại</Text>

        <ScrollView
          style={styles.group_card_promotion}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {promotion.map((item, index) => (
            <View key={index} style={styles.card_promotion}>
              {/* <Text>{item.title}</Text> */}
              <Image source={{ uri: item, width: 300, height: 200 }} />
            </View>
          ))}
        </ScrollView>

        <Text style={styles.title_group}>Tính năng</Text>
        <View style={styles.group_card_feature}>
          {order.map((item, index) => (
            <CardNavigate
              key={index}
              title={item.title}
              style={{
                marginBottom: 10,
                marginLeft: (width - 80 * 4 - 20) / 8,
                marginRight: (width - 80 * 4 - 20) / 8,
              }}
              icon={item.icon}
            />
          ))}
        </View>

        <ScrollView
          style={[styles.group_card_promotion, { marginBottom: 20 }]}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {promotion2.map((item, index) => (
            <View key={index} style={styles.card_promotion}>
              <Image source={{ uri: item, width: 300, height: 200 }} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default connect(
  ({ navigation: { mode } }) => ({ mode }),
  ({ navigation: { updateData } }) => ({ updateData })
)(withNavigation(Home));
