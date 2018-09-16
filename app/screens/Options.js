import React, { Component } from 'react'
import { ScrollView, StatusBar, Platform } from 'react-native'
import { ListItem, Separator } from '../components/List'
import { Ionicons } from '@expo/vector-icons'

const ICON_COLOR = '#868686'
const ICON_SIZE = 23
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

class Options extends Component {
  handleThemesPress = () => {
    console.log('press themes')
  }
  handleSitePress = () => {
    console.log('press site')
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    )
  }
}
export default Options
