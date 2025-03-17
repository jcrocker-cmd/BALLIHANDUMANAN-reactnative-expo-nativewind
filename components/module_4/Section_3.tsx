import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_3 = () => {
  return (
    <>
      {/* _______________________________JOURNEY TO THE TREASURES________________________________ */}
      <CollapsibleSubTitle name="JOURNEY TO THE TREASURES">
        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          Before we explore Balilihan's unique cultural heritage, let's understand what cultural
          heritage means. It's everything—both tangible and intangible—that a community values and
          passes down through generations.{'\n'}
          {'\n'}
          <Text style={{ color: '#0E8341' }}>Tangible Heritages</Text> are all resources with some
          physical embodiment of cultural values: historic towns, buildings, archeological sites,
          landscapes, and objects. This includes:{'\n'}
          • <Text style={{ color: '#0E8341' }}>Natural Heritage</Text> - Environments, landscapes,
          and natural resources like land and water.{'\n'}
          • <Text style={{ color: '#0E8341' }}>Built/Immovable Heritage</Text> - Structures like
          schools, government buildings, markets, bridges, parks, houses, and religious sites.
          • Movable Heritage - Things created by people, like paintings, sculptures, furniture,
          religious artifacts, and examples of traditional crafts (farming, fishing, baking,
          carpentry, etc.).{'\n'}
          {'\n'}
          <Text style={{ color: '#0E8341' }}>Intangible Heritage</Text> is less about physical
          things and more about practices, beliefs, and knowledge such as 
          <Text style={{ color: '#0E8341' }}>Oral Traditions, Customs, and Expressions</Text>
           (stories, songs, sayings, and language), 
          <Text style={{ color: '#0E8341' }}>Social Practices, Rituals/Festive Events</Text>
           (celebrations and ceremonies), 
          <Text style={{ color: '#0E8341' }}>Performing Arts</Text> (music, dance, theater), or 
          <Text style={{ color: '#0E8341' }}>Traditional Skills and Craftsmanship</Text>
           (specialized skills passed down through generations).{'\n'}
          {'\n'}
          With this understanding, we're ready to discover the incredible cultural heritage
          of Balilihan!
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_3;
