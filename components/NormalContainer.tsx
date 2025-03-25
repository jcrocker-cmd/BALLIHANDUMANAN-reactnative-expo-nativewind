import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

export const NormalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      className={`flex-1 px-8 ${Platform.OS === 'ios' ? 'py-8' : ''} max-xs:px-6`}
    >
      {children}
    </SafeAreaView>
  );
};
