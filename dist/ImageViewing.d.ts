/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ComponentType } from "react";
import { ImageSource } from "./@types";
export type ImageViewingProps = {
    images: ImageSource[];
    keyExtractor?: (imageSrc: ImageSource, index: number) => string;
    imageIndex: number;
    visible: boolean;
    onRequestClose: () => void;
    onLongPress?: (image: ImageSource) => void;
    onImageIndexChange?: (imageIndex: number) => void;
    backgroundColor?: string;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    delayLongPress?: number;
    HeaderComponent?: ComponentType<{
        imageIndex: number;
    }>;
    FooterComponent?: ComponentType<{
        imageIndex: number;
    }>;
};
declare const EnhancedImageViewing: (props: ImageViewingProps) => JSX.Element;
export default EnhancedImageViewing;
