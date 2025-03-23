import React from 'react';
import { View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function AdvancedTable() {
  const tableHead = ['Level 1', 'Level 2', 'Level 3'];
  const tableData = [
    ['1. Haguilanan Grande ', '1. Cantomimbo', '1. Cantomimbo'],
    ['2. San Roque ', '2. Sagasa', '2. Sagasa'],
    ['3. San Isidro ', '3. Boyog Prope', '3. Boyog Norte'],
    ['4. Hanopol Este ', '4. Hanopol Norte', '4. Del Rosario'],
    ['5. Tagustusan ', '5. Tagustusan', '5. Santo Niño'],
    ['6. Del Carmen Este ', '6. Del Carmen Norte', '6. Del Carmen Norte'],
    ['7. Magsija ', '7. Cabad', '7. Dorol'],
    ['8. Datag Sur ', '8. Cantalid', '8. Candasig'],
    ['9. Datag Norte ', '9. Baucan Sur', '9. Maslog'],
    ['10. Baucan Norte ', '10. Boctol', '10. Del Carmen Sur'],
  ];

  return (
    <View>
      <Text
        style={{ fontSize: 14, textAlign: 'center', marginBottom: 10 }}
        className="pt-8 font-inknut uppercase">
        Balilihan, THE EXPLORER!
      </Text>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }} className="font-inknut">
        <Row
          data={tableHead}
          style={{ backgroundColor: '#ddd' }}
          textStyle={{ textAlign: 'center' }}
          className="font-inknut"
        />
        <Rows
          data={tableData}
          textStyle={{ textAlign: 'left' }}
          className="px-1 font-inknut text-[11px]"
        />
      </Table>
    </View>
  );
}
