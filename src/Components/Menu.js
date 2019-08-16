import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class NasaMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu color={'red'} inverted widths={3} pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Photo Of The Day'
            active={activeItem === 'Photo Of The Day'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
