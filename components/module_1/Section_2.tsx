import { Text, View } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from '../../components/CollapsibleSubTitle';

const Section_2 = () => {
  return (
    <>
      {/* _______________________________Let's Do This!________________________________ */}
      <CollapsibleSubTitle name="let’s do this!">
        <View style={{ flex: 1 }}>
          <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px]">
            A. Before we delve into the lesson, let’s test your knowledge of our barangays with a
            fun activity called <Text style={{ color: '#0E8341' }}>“Guess that Barangay!</Text>
            {'\n'}• Head over to the{' '}
            <Text style={{ color: '#0E8341' }}>Assessment & Activities</Text> section of the app to
            participate.
            {'\n'}• Once you’ve finished, take a moment to reflect on what you’ve learned. Consider
            these guide questions: {'\n'}
            {'\n'}
            1. What did you learn about the barangays in Balilihan during the game?{'\n'}
            2. Which barangay name or meaning surprised you the most? Why?{'\n'}3. How can we use
            our knowledge of barangay names to help us better understand and appreciate our
            community?
            {'\n'}
            {'\n'}
            B. Now that you've reflected on the "Guess that Barangay!" activity, it's time to put
            your knowledge into action!{'\n'}• Get ready for{' '}
            <Text style={{ color: '#0E8341' }}>"Balilinhon, the Explorer,"</Text> where you'll use
            your knowledge of barangays and map skills to locate them on a blank map.
            {'\n'}• You can find this activity in the Quizzes/Activities section of the app
          </Text>
        </View>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_2;
