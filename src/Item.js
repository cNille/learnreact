import React, { Component } from 'react';

const myStyle={
  label: {
    display: 'block',
  }
}

class Item extends Component {
  render (){
    const { onPress, item} = this.props;
    return (
      <label style={myStyle.label}>
        <input
          type='checkBox'
          value={item.name}
          checked={item.done}
          onChange={onPress}
        />
        { item.name }
     </label>
    );
  }
}
export default Item;
