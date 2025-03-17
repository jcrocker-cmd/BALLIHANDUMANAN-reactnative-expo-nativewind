import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from '../CollapsibleSubTitle';

const Section_2 = () => {
  return (
    <>
      {/* _______________________________Let's Do This!________________________________ */}
      <CollapsibleSubTitle name="let’s do this!">
        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px]">
          Before we dive into the history of Balilihan and the colonizers, let's have some fun! Get
          ready for "<Text style={{ color: '#0E8341' }}>Guess that Era!</Text>"  • Head over to the
          Quiz/Activity section of the app to participate.{'\n'}
          {'\n'}  • After you've completed the activity, take a moment to reflect on these guide
          questions:{'\n'}
          {'\n'}1. What did you learn about the activity?{'\n'}
          2. Can you describe one event from the activity that surprised you, and explain why?
          {'\n'}
          3. Which colonial power do you think had the most lasting impact on Balilihan based on the
          events described? Which period in the colonization of the Philippines has the most
          significant contribution or impact on the town of Balilihan?{'\n'}
          {'\n'}  Great job reflecting and completing the "Guess That Era!" activity.  Now that
          we've warmed up our historical thinking skills, let's explore into the significant events
          that shaped Balilihan during the period of colonial occupation.
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_2;
