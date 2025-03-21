import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from '../CollapsibleSubTitle';

const Section_2 = () => {
  return (
    <>
      {/* _______________________________Let's Do This!________________________________ */}
      <CollapsibleSubTitle name="let’s do this!">
        <Text className="-pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
          Before we begin this chapter's exploration of Balilihan's cultural heritage, let's test
          your knowledge{'\n'}
          {'\n'}
          • Complete the "Uncover Balilihan's Treasures" activity within the Balilihandumanan app.
          This activity presents a series of photos showcasing Balilihan's cultural assets; guess
          the name of each heritage site.{'\n'}
          • Once you've completed the activity, we'll delve deeper into the stories behind these
          treasures with the following guide questions:{'\n'}
          1. Did you learn anything new about Balilihan’s cultural heritage during the activity?
          What surprised you?{'\n'}
          2. Did you find it easier to identify tangible or intangible heritage? Why do you think
          that is?{'\n'}
          {'\n'}
          Now that you've tested your knowledge of Balilihan's cultural heritage with the
          "Uncover Balilihan's Treasures" activity, let's delve deeper! We'll explore the stories
          and significance of these treasured assets.
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_2;
