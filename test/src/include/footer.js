import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
    <WhiteSpace />
    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
         );
    }
}
 
export default Footer;