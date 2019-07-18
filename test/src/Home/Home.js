import React, { Component } from 'react';
import { Tabs} from 'antd-mobile';
import './Home.css'

const tabs = [
  { title: '首页' },
  { title: '卖房' },
  { title: '福利' },
  { title: '我的' },
];
  

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="tabBars">
                <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false} tabBarPosition="bottom">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of first tab1
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of second tab2
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of third tab3
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of third tab4
                </div>
                </Tabs>
            </div>
         );
    }
}
 
export default Home;


