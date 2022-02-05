import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/User";

const FabGroup = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? "minus-circle" : "plus"}
          actions={[
            {
              icon: "logout",
              label: "Logout",
              onPress: () => {
                dispatch(logoutUser());
              },
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FabGroup;
