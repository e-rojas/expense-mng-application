import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import TabIcon from "./TabIcon";

const RgtActions = (
  deleteColor: { (id: number): void; (arg0: any): void },
  item: { id: number; color?: string }
) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#6D8299"
      onPress={() => {
        deleteColor(item.id);
      }}
      style={styles.rightAction}
    >
      <TabIcon name="trash" color="#fff" />
    </TouchableHighlight>
  );
};

export default RgtActions;

const styles = StyleSheet.create({
  actionText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#EFF8FF",
    paddingRight: 2,
    paddingLeft: 2,
  },
  rightAction: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    backgroundColor: "orange",
    borderRadius: 5,
  },
});
