import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
          <ScrollView>
            <Text className="font-inknut py-2 text-justify text-lg text-white">
              Beginning: Town and its People WHAT I NEED TO KNOW? Have you ever wondered how
              Balilihan, the town we know and love today, came to be? How did it transition from a
              humble settlement to a thriving municipality? This chapter invites you on a journey to
              uncover the captivating story of Balilihan's beginnings. We'll explore the diverse
              tales surrounding the town's founding, its early inhabitants, and the establishment of
              its various barrios. We'll delve into the historical relationship between Balilihan
              and Baclayon, examining key events, territorial changes, and annexations that shaped
              the town's identity. Through exploration and reflection, we'll cultivate a deep
              appreciation for Balilihan's rich heritage, fostering a sense of responsibility to
              preserve and protect this invaluable legacy for future generations. LET’S DO THIS! A.
              Before we delve into the lesson, let’s test your knowledge of our barangays with a fun
              activity called “Guess that Barangay!” • Head over to the Quizzes/Activities section
              of the app to participate. • Once you’ve finished, take a moment to reflect on what
              you’ve learned. Consider these guide questions: 1. What did you learn about the
              barangays in Balilihan during the game? 2. Which barangay name or meaning surprised
              you the most? Why? 3. How can we use our knowledge of barangay names to help us better
              understand and appreciate our community? B. Now that you've reflected on the "Guess
              that Barangay!" activity, it's time to put your knowledge into action! • Get ready for
              "Balilinhon, the Explorer," where you'll use your knowledge of barangays and map
              skills to locate them on a blank map. • You can find this activity in the
              Quizzes/Activities section of the app. JOURNEY TO THE BEGINNING… After completing both
              activities, it’s time to watch a short video clip about the town’s origins and how it
              was started. Afterward, please share your thoughts and reflections on what you’ve
              learned. (Insert video) BALILIHAN’S FORMAL ESTABLISHMENT, TERRITORIAL CHANGES, AND
              ANNEXATIONS (Insert old map of Bohol with Cebu and Bohol alone, two maps) Balilihan's
              history is intertwined with the evolving political landscape of the Philippines.
              Initially, under Spanish rule, Bohol fell under the jurisdiction of Cebu. Balilihan, a
              significant pueblo (town) at the time with 2,878 inhabitants, was among the 41 pueblos
              that comprised Cebu province. However, on September 1, 1847, Spanish authorities
              established Bohol as a separate province independent from Cebu. Only 22 of Bohol's
              towns were created during that time, including Balilihan. (Insert map highlights
              Baclayon and neighboring towns) Baclayon was the first town the Spaniards built in
              Bohol. Originally, the town of Baclayon was much bigger and included what are now
              Balilihan, Alburquerque, Catigbian, Corella, Sikatuna, and San Isidro. (Photo of
              Governor Ricafort) Around 1827, Governor-General Mariano Ricafort wanted people to
              govern themselves, so new towns were made. Balilihan became its town around 1828,
              separating from Baclayon. At first, it was sparsely settled, but grew rapidly and
              became economically, politically, socially, and religiously progressive. It was on
              September 29, 1828, when a friar, called by the natives as Fray Tomas, sought the
              cooperation of the inhabitants and organized and established a settlement in the sitio
              of “Bay sa Iring” (presently located in Datag). (Photo of A. Clarin) In 1901, Jose
              Aniceto B. Clarin, Bohol's first civil governor, announced his intention to annex
              Balilihan and make it a barrio of Antequera, effectively abolishing Balilihan as a
              town. (Photo of Manuel Diamante) Manuel Diamante, Balilihan's municipal president,
              strongly opposed this plan, voicing the people's discontent and warning of potential
              unrest if the annexation proceeded. Governor Clarin ultimately decided against
              annexing Balilihan to Antequera. However, as a consequence of this initial plan, the
              neighboring town of Catigbian was downgraded to a barrio under Act No. 370 of the
              Philippine Commission, becoming part of Balilihan. Following this action, Governor
              Clarin proposed a revised plan to the US authorities: instead of Balilihan's demotion,
              Catigbian should be integrated into Balilihan. This demonstrates a shift in strategy,
              from initially targeting Balilihan for annexation to ultimately suggesting Catigbian's
              incorporation into Balilihan. (Map of Balilihan and Catigbian) In a twist of fate, by
              1949, Balilihan faced significant territorial loss when Catigbian was granted its own
              town charter. This decision came despite strong objections from Balilihan's Mayor,
              Balbino Chatto, and Gerardo Racho, who personally traveled to Malacañang to appeal to
              President Elpidio Quirino. Their efforts to retain Catigbian within Balilihan were
              unsuccessful, marking a significant change in the region's administrative landscape.
              Subsequent administrative divisions further shaped Balilihan's position. In 1907,
              Bohol's municipalities were divided into three legislative districts, with Balilihan
              initially assigned to the Second District. The 1987 Philippine Constitution led to
              further reapportionment of towns, resulting in Balilihan's current placement in the
              First District of Bohol. This demonstrates Balilihan's shifting administrative
              affiliations throughout its history, reflecting the broader changes in the governance
              of the region. TRY THIS! BONUS FACTS! (Insert Photo Overview of Balilihan) Balilihan
              is an interior town, located 22 kilometers northeast of Tagbilaran City, the capital
              of Bohol. The town is situated on a low, rolling plateau with verdant hills, mostly
              covered in trees and vegetation. The lowlands are usually converted into rice fields,
              while the hillsides are typically planted with corn, root crops, and coconuts. Ever
              wondered about the name “Balilihan”? (Insert photo of “balili” grass) It’s linked to a
              species of grass locally known as "balili," a naturally abundant and excellent grazing
              food for large cattle such as carabaos, cows, and horses. Therefore, Balilihan simply
              implies an abundance of balili grass in the place. LET’S REFLECT! Reflect on what
              you’ve learned about Balilihan’s formal establishment, territorial changes, and
              annexations by answering these guide questions: 1. What were the major challenges
              faced during the establishment of the municipality? What triumphs and successes marked
              this period in Balilihan’s history? 2. For you, how might the original settlers of
              Balilihan have felt about territorial changes? 3. What lessons can be learned from the
              experience of establishing Balilihan as an independent municipality? TIME TO SHINE!
              Create a timeline showcasing the key events in the origin of Balilihan, including its
              creation, territorial changes, and annexations. Review the information you’ve learned
              from the discussions. Organize your timeline using the format provided below. (Insert
              Timeline format) EXPLORE MORE! Having established the context of Balilihan and its
              people, we now move on to examine the pivotal chapter detailing Balilihan's
              interaction with the colonizers. You’ll learn about the changes brought by the
              colonizers and the life and challenges faced by the Balilinhons. Prepare to uncover a
              more nuanced understanding of this significant historical period. Proceed to the next
              chapter (Balilihan and the Colonizers)!
            </Text>
          </ScrollView>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
