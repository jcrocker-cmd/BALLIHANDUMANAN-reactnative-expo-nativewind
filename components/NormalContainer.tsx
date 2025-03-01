import { SafeAreaView } from 'react-native';

export const NormalContainer = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className="flex-1 p-8">{children}</SafeAreaView>;
};
