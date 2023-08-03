/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/// <reference types="react" />
import { ModalProps } from "react-native";
import { ImageViewingProps } from "./ImageViewing";
interface Props extends ImageViewingProps {
    presentationStyle?: ModalProps["presentationStyle"];
    animationType?: ModalProps["animationType"];
}
declare const EnhancedImageViewing: (props: Props) => JSX.Element;
export default EnhancedImageViewing;
