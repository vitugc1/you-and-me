import { memo } from "react"
import { Text, View } from "react-native"

import WatchSvg from '../../assets/watch.svg'
import HourSvg from '../../assets/hour.svg'

import { styles } from "./styles"

const Component = () => {
  return (
    <View style={styles.container}>
      <View style={styles.visible} />
      <View style={styles.content}>
        <View style={{ height: '100%', justifyContent: 'space-evenly'}}>
          <Text style={styles.title}>Comunidade</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <WatchSvg width="15" height="15" color="7C7C8A"/>
            <Text style={styles.subTitle}>20/01/22 às 14h</Text>
          </View>
        </View>
        <View>
          <View style={styles.time}>
            <HourSvg width="13.5" height="19.5" color="#FBA94C" />
          </View>
        </View>
      </View>
    </View>
  )
}

export const Card = memo(Component, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})