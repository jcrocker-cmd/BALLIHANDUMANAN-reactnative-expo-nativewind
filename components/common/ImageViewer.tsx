import React from 'react';
import { Modal } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

interface ImageViewerProps {
  images: { uri: string }[];
  visibleIndex: number | null;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images, visibleIndex, onClose }) => {
  return (
    <Modal visible={visibleIndex !== null} transparent>
      <ImageViewing
        images={images}
        imageIndex={visibleIndex ?? 0}
        visible={visibleIndex !== null}
        onRequestClose={onClose}
      />
    </Modal>
  );
};

export default ImageViewer;
