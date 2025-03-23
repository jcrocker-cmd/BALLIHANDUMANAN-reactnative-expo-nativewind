import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_9 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);

  const images = useMemo(
    () => [
      require('../../assets/module_4/6. Other Cultural Assets/1.a Old Municipal Hall.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/1.b Old Municipal Hall.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/1.c Old Municipal Hall.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/2. Balilihan Central Elementary School - Gabaldon Building.png'),
      require('../../assets/module_4/6. Other Cultural Assets/3.a Diamante House (Del Carmen Weste).png'),
      require('../../assets/module_4/6. Other Cultural Assets/3.b Jaum House (Datag Norte).png'),
      require('../../assets/module_4/6. Other Cultural Assets/3.c Ocon House (Cabad).png'),
      require('../../assets/module_4/6. Other Cultural Assets/4.a Old Cemetery.png'),
      require('../../assets/module_4/6. Other Cultural Assets/4.b Sambag Cemetery.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/4.c Abaca Cemetery.png'),
      require('../../assets/module_4/6. Other Cultural Assets/4.d Bod Cemetery.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/4.e Datag Cemetery.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/5.a Camugao Falls.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/5.b Camugao Falls.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/5.c Camugao Falls before the 2013 Bohol Earthquake.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/6.a Niluksuan Falls.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/6.b Niluksuan Falls before the 2013 Bohol Earthquake.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/8.a Bugwak Spring.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/8.b Bugwak Spring.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/7.a Magsija Swimming Pool.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/7.b Magsija Swimming Pool.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/9.a Andoy Cave.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/9.b Andoy Cave.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/9.c Andoy Cave.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/10.a Camagong-ong Cave.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/10.b Camagong-ong Cave.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/11.a Manlawi Peak.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/11.b Manlawi Peak.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/12. Bantayan River (known as Abatan River).jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/13.a BAWOD.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/13.b BAWOD products.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/13.c BAWOD.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/14. Kumparsa.png'),
      require('../../assets/module_4/6. Other Cultural Assets/15. Bingka ni Manang Kikay.png'),
      require('../../assets/module_4/6. Other Cultural Assets/16.a Tinunuang Uwang.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/16.b Tinunuang Ugang and Bebe.png'),
      require('../../assets/module_4/6. Other Cultural Assets/17. Basket Weaving in Dorol.png'),
      require('../../assets/module_4/6. Other Cultural Assets/18.a Santo Entierro.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/18.b Prosesyon sa Santo Entierro.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/19.a Sugat.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/19.b Hugos.jpg'),
      require('../../assets/module_4/6. Other Cultural Assets/20.a Old Dining Table.png'),
      require('../../assets/module_4/6. Other Cultural Assets/20.b Tea Set Porcelain.png'),
      require('../../assets/module_4/6. Other Cultural Assets/20.c Soupera.png'),
      require('../../assets/module_4/6. Other Cultural Assets/21. Urna.png'),
      require('../../assets/module_4/6. Other Cultural Assets/22.a Binisayang Pagpanambal.png'),
      require('../../assets/module_4/6. Other Cultural Assets/22.b Binisayang Pagpanambal.png'),
      require('../../assets/module_4/6. Other Cultural Assets/23. Tagbo.png'),
      require('../../assets/module_4/6. Other Cultural Assets/24. Eladio I. Chatto.png'),
      require('../../assets/module_4/6. Other Cultural Assets/25. Lino I. Chatto Sr..png'),
      require('../../assets/module_4/6. Other Cultural Assets/26. Hermogina R. Racho.png'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________OTHER CULTURAL HERITAGE ASSETS IN BALILIHAN________________________________ */}
      <CollapsibleSubTitle name={`OTHER CULTURAL HERITAGE\nASSETS IN BALILIHAN`}>
        <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(2)}>
            <Image source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Balilihan Old Municipal Hall{'\n'}</Text>
          (Del Carmen Sur){'\n'} Declared as an Important Cultural Property by the National Museum
          of the Philippines.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
          onPress={handlePress(3)}>
          <Image source={images[3]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Balilihan Central Elementary School{'\n'}</Text>
          (Del Carmen Weste){'\n'}A century-old Gabaldon Building (a name from Assemblyman Isauro
          Gabaldon, the Father of Philippine Public Education).
        </Text>

        <TouchableOpacity
          className="mt-3 h-[230px] w-full overflow-hidden"
          onPress={handlePress(4)}>
          <Image source={images[4]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(5)}>
          <Image source={images[5]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[230px] w-full overflow-hidden"
          onPress={handlePress(6)}>
          <Image source={images[6]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Ancestral Houses in Balilihan{'\n'}</Text>
          Diamante House (Del Carmen Weste), Jaum House{'\n'}(Datag Norte), and Ocon House (Cabad)
          were built during the Spanish and American colonial period.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[210px] w-full overflow-hidden"
          onPress={handlePress(7)}>
          <Image source={images[7]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity className="h-[210px] w-full overflow-hidden" onPress={handlePress(8)}>
          <Image source={images[8]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity className="h-[210px] w-full overflow-hidden" onPress={handlePress(9)}>
          <Image source={images[9]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity className="h-[210px] w-full overflow-hidden" onPress={handlePress(10)}>
          <Image source={images[10]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[210px] w-full overflow-hidden"
          onPress={handlePress(11)}>
          <Image source={images[11]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Cemeteries in Balilihan{'\n'}</Text>
          Old Cemetery (Del Carmen Weste), Abaca Cemetery (Del Carmen Sur), SambagCemetery (Del
          Carmen Sur), Bod Cemetery (Cogon), & Datag Cemetery (HanopolEste)
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[220px] w-[50%] overflow-hidden" onPress={handlePress(12)}>
            <Image source={images[12]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[220px] w-[50%] overflow-hidden" onPress={handlePress(13)}>
            <Image source={images[13]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="mb-5 h-[220px] w-full overflow-hidden"
          onPress={handlePress(14)}>
          <Image source={images[14]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Camugao Falls </Text>(San Isidro){'\n'}
          The tallest waterfall in the municipality (30 meters).
        </Text>

        <TouchableOpacity
          className="mt-3 h-[220px] w-full overflow-hidden"
          onPress={handlePress(15)}>
          <Image source={images[15]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[220px] w-full overflow-hidden"
          onPress={handlePress(16)}>
          <Image source={images[16]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Niluksuan Falls </Text>(Sal-ing){'\n'}
          This waterfall, though short in height, resembles a cascade of shimmering, transparent
          curtains.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[220px] w-full overflow-hidden"
          onPress={handlePress(17)}>
          <Image source={images[17]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[220px] w-full overflow-hidden"
          onPress={handlePress(18)}>
          <Image source={images[18]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Bugwak Spring </Text>(Sto. Niño){'\n'}
          It is named "Bugwak" due to the powerful pressure of water that bursts forth from the
          lower surface of the mountainside spring.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[220px] w-full overflow-hidden"
          onPress={handlePress(19)}>
          <Image source={images[19]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[220px] w-full overflow-hidden"
          onPress={handlePress(20)}>
          <Image source={images[20]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Magsija Swimming Pool </Text>(Magsija){'\n'}
          Located along the highway, it is a man-made pool, fed by a nearby spring, that offers cool
          and fresh water.
        </Text>

        <View className="mb-5 mt-4 flex flex-row">
          <TouchableOpacity className="h-[350px] w-1/2 overflow-hidden " onPress={handlePress(21)}>
            <Image source={images[21]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-1/2">
            <TouchableOpacity
              className="h-[175px] w-full overflow-hidden"
              onPress={handlePress(22)}>
              <Image source={images[22]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[175px] w-full overflow-hidden"
              onPress={handlePress(23)}>
              <Image source={images[23]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Andoy Cave </Text>(Hanopol Norte){'\n'}
          The cave is called Andoy, named after its former landowner, Fernando Paanod.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[180px] w-full overflow-hidden"
          onPress={handlePress(24)}>
          <Image source={images[24]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[180px] w-full overflow-hidden"
          onPress={handlePress(25)}>
          <Image source={images[25]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Camagong-ong Cave </Text>(Maslog){'\n'}
          Camagong-ong Cave brings an enchanting and fascinating ambiance while doing the laundry
          and fetching water for the house consumption of the locals.
        </Text>

        <View className="mb-5 mt-3 flex w-full flex-row">
          <TouchableOpacity className="h-[280px] w-1/2 overflow-hidden" onPress={handlePress(26)}>
            <Image source={images[26]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[280px] w-1/2 overflow-hidden" onPress={handlePress(27)}>
            <Image source={images[27]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Manlawe Peak or Bud Manlawe </Text>(Cogon)
          {'\n'}
          Standing tall at approximately 900 feet, this mountain is the highest point in the
          municipality.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[280px] w-full overflow-hidden"
          onPress={handlePress(28)}>
          <Image source={images[28]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Bantayan River </Text>(Cabad)
          {'\n'}
          The area of the Bantayan River serves as a connecting point between the Abatan River and
          Kawasan Falls.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[220px] w-full overflow-hidden"
          onPress={handlePress(29)}>
          <Image source={images[29]} className="h-full w-full" />
        </TouchableOpacity>
        <View className="mb-5 flex w-full flex-row">
          <TouchableOpacity className="h-[180px] w-1/2 overflow-hidden" onPress={handlePress(30)}>
            <Image source={images[30]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-1/2 overflow-hidden" onPress={handlePress(31)}>
            <Image source={images[31]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>
            Balilihan Association of Women for Development (BAWOD)
          </Text>
          {'\n'}
          (Del Carmen Sur){'\n'}
          Empowered by the Balilihan LGU, BAWOD's skilled women collaborate, develop their crafts,
          and prosper through a shared vision and mutual support.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[280px] w-full overflow-hidden"
          onPress={handlePress(32)}>
          <Image source={images[32]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Kumparsa</Text>
          {'\n'}A well-known traditional Filipino stringed ensemble that local musicians in
          DatagNorte, Balilihan play.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[280px] w-full overflow-hidden"
          onPress={handlePress(33)}>
          <Image source={images[33]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Bingka ni Manang Kikay</Text>
          {'\n'}A traditional rice cake that has been a beloved Balilihan delicacy for over 60
          years, enjoyed especially on market days, Sundays, and special occasions.
        </Text>

        <TouchableOpacity
          className="mt-3 h-[220px] w-full overflow-hidden"
          onPress={handlePress(34)}>
          <Image source={images[34]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[220px] w-full overflow-hidden"
          onPress={handlePress(35)}>
          <Image source={images[35]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Tinunuang Uwang, Ugang, and Bebe</Text>
          {'\n'}
          Traditionally cooked in coconut milk (tinunuan), the “uwang” (river shrimp), and “ugang ug
          bebe” (river clams) are a local delicacy found in the river of Dorol.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[160px] w-full overflow-hidden"
          onPress={handlePress(36)}>
          <Image source={images[36]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Basket Weaving in Balilihan</Text>
          {'\n'}
          Basket weaving in Dorol, a barangay boundary in the municipality of Antequera (Basket
          Capital of Bohol).
        </Text>

        <View className="mb-5 flex w-full flex-row">
          <TouchableOpacity className="h-[230px] w-1/2 overflow-hidden" onPress={handlePress(37)}>
            <Image source={images[37]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-1/2 overflow-hidden" onPress={handlePress(38)}>
            <Image source={images[38]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Prosesyon sa Santo Entierro</Text>
          {'\n'}
          Each Good Friday, Catholic devotees in Balilihan solemnly participate in the Santo
          Entierro procession, commemorating Christ's burial.
        </Text>

        <View className="mb-5 mt-3 flex w-full">
          <TouchableOpacity className="h-[210px] w-full overflow-hidden" onPress={handlePress(39)}>
            <Image source={images[39]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[210px] w-full overflow-hidden" onPress={handlePress(40)}>
            <Image source={images[40]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Sugat and Hugos</Text>
          {'\n'}
          The "Sugat," or "Encounter of Mary and Jesus," a cherished annual tradition and highlight
          of Balilihan's Easter Eve Mass, features the "hugos," a tradition where a child plays the
          role of an angel descending from heaven to comfort the grieving Virgin Mary.
        </Text>

        <View className="mt-3 flex w-full">
          <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(41)}>
            <Image source={images[41]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(42)}>
            <Image source={images[42]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="mb-5 h-[280px] w-full overflow-hidden"
          onPress={handlePress(43)}>
          <Image source={images[43]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Furniture and Tableware</Text>
          {'\n'}
          These furniture and tableware pieces were used by local leaders during the American and
          Japanese colonial periods.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
          onPress={handlePress(44)}>
          <Image source={images[44]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className=" text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Urna</Text>
          {'\n'}
          It is intricately carved wooden housings for Santos (religious icons), which are commonly
          found throughout the Philippines.
        </Text>

        <View className="mb-5 mt-3 flex w-full">
          <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(45)}>
            <Image source={images[45]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(46)}>
            <Image source={images[46]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Binisayang Pagpanambaw</Text>
          {'\n'}
          Local healers in Balilihan utilize an empowered coconut oil, created from chopped
          medicinal leaves and roots in coconut oil every Good Friday, to enhance their healing
          practices.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[280px] w-full overflow-hidden"
          onPress={handlePress(47)}>
          <Image source={images[47]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Tagbo o Panagtapok sa Pagpanghinlo</Text>
          {'\n'}
          In Balilihan, the community practice of "Tagbo," initiated by barangay officials for
          events like clean-ups and road clearing, remains prevalent.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
          onPress={handlePress(48)}>
          <Image source={images[48]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Eladio I. Chatto</Text>
          {'\n'}
          The Assemblyman of Bohol from 1984 to 1986 and the longest-serving mayor in the
          municipality of Balilihan (28 years – 1959 to 1984 & 1995 to 1998)
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
          onPress={handlePress(49)}>
          <Image source={images[49]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Lino Chatto Sr.</Text>
          {'\n'}
          The longest-serving governor in the province of Bohol (11 years – 1967 to 1978)
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
          onPress={handlePress(50)}>
          <Image source={images[50]} className="h-full w-full" />
        </TouchableOpacity>
        <Text className="mb-5 text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Hermogena R. Racho</Text>
          {'\n'}
          She was part of the Women’s Auxiliary Service (WAS) in Bohol during the Second World War.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_9;
