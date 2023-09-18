import React from 'react'
import dynamic from 'next/dynamic'
import { Document, Page, Text, View,StyleSheet  } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.section}>
          <Text>Hello World!</Text>
        </View>
    </Page>
    </Document>
  )
}

export default MyDocument