/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import {
  StyleSheet,
  ModalProps,
  Modal,
} from "react-native";

import StatusBarManager from "./components/StatusBarManager";

import useRequestClose from "./hooks/useRequestClose";
import ImageViewing, { ImageViewingProps } from "./ImageViewing";

interface Props extends ImageViewingProps {
  presentationStyle?: ModalProps["presentationStyle"];
  animationType?: ModalProps["animationType"];
};

const DEFAULT_ANIMATION_TYPE = "fade";

const ImageViewingModal = (props: Props) => {
  const {
    visible,
    onRequestClose,
    animationType = DEFAULT_ANIMATION_TYPE,
    presentationStyle,
    } = props;
  const [_, onRequestCloseEnhanced] = useRequestClose(onRequestClose);

  if (!visible) {
    return null;
  }

  return (
    <>
    <Modal
      transparent={presentationStyle === "overFullScreen"}
      visible={visible}
      presentationStyle={presentationStyle}
      animationType={animationType}
      onRequestClose={onRequestCloseEnhanced}
      supportedOrientations={["portrait"]}
      hardwareAccelerated
    >
      <StatusBarManager presentationStyle={presentationStyle} />
      <ImageViewing {...props} />
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    top: 0,
  },
  footer: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    bottom: 0,
  },
});

const EnhancedImageViewing = (props: Props) => (
  <ImageViewingModal key={props.imageIndex} {...props} />
);

export default EnhancedImageViewing;
