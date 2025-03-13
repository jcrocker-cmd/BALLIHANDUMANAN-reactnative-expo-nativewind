declare module 'expo-fast-image' {
  import { ImageProps } from 'react-native';

  export interface FastImageProps extends ImageProps {
    cacheKey?: string;
  }

  const FastImage: React.FC<FastImageProps>;
  export default FastImage;
}
