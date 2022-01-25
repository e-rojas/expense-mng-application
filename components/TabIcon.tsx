import { FontAwesome } from "@expo/vector-icons";
import {
  View,
} from "react-native";

function TabIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <View>
      <FontAwesome
        name={props.name}
        color={props.color}
        size={18}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
}
export default TabIcon;
