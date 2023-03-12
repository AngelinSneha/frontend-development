import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function Swipeable({
  showModal = false,
  onCloseModal = () => {},
  children,
}) {
  return (
    <div>
      <React.Fragment key="right">
        <SwipeableDrawer anchor="right" open={showModal} onClose={onCloseModal}>
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
