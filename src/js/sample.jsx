'use strict';

import React from 'react';
import {render} from 'react-dom';

class Sample extends React.Component {
  render () {
    return <p>react</p>;
  }
}

render(<Sample/>, document.getElementById('app'));
