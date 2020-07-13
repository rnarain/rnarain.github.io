/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav3 from '../../ant-design/Nav3';
// import Feature1 from './Feature1';
import Banner5 from '../../ant-design/Banner5';
// import Content13 from './Content13';
// import Pricing0 from './Pricing0';
// import Banner0 from './Banner0';
// import Content0 from './Content0';
// import Content5 from './Content5';
// import Feature7 from './Feature7';
// import Feature5 from './Feature5';
// import Content3 from './Content3';
 import Content9 from '../../ant-design/Content9';
// import Teams0 from './Teams0';
// import Contact0 from '../../ant-design/Contact0';
import Footer1 from '../../ant-design/Footer1';

import {
  Nav30DataSource,
  Feature10DataSource,
  Banner50DataSource,
  Content130DataSource,
  Pricing00DataSource,
  Banner01DataSource,
  Content00DataSource,
  Content50DataSource,
  Feature70DataSource,
  Feature50DataSource,
  Content30DataSource,
  Content90DataSource,
  Teams00DataSource,
  Contact00DataSource,
  Footer10DataSource,
} from '../../ant-design/data.source';
import '../../ant-design/less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile : false,
      show: !location.port
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,
    //   <Feature1
    //     id="Feature1_0"
    //     key="Feature1_0"
    //     dataSource={Feature10DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
      <Banner5
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner50DataSource}
        isMobile={this.state.isMobile}
      />,
    //   <Content13
    //     id="Content13_0"
    //     key="Content13_0"
    //     dataSource={Content130DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Pricing0
    //     id="Pricing0_0"
    //     key="Pricing0_0"
    //     dataSource={Pricing00DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Banner0
    //     id="Banner0_1"
    //     key="Banner0_1"
    //     dataSource={Banner01DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Content0
    //     id="Content0_0"
    //     key="Content0_0"
    //     dataSource={Content00DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Content5
    //     id="Content5_0"
    //     key="Content5_0"
    //     dataSource={Content50DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Feature7
    //     id="Feature7_0"
    //     key="Feature7_0"
    //     dataSource={Feature70DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Feature5
    //     id="Feature5_0"
    //     key="Feature5_0"
    //     dataSource={Feature50DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
    //   <Content3
    //     id="Content3_0"
    //     key="Content3_0"
    //     dataSource={Content30DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={this.state.isMobile}
      />,
    //   <Teams0
    //     id="Teams0_0"
    //     key="Teams0_0"
    //     dataSource={Teams00DataSource}
    //     isMobile={this.state.isMobile}
    //   />,
      // <Contact0
      //   id="Contact0_0"
      //   key="Contact0_0"
      //   dataSource={Contact00DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {this.state.show && children}
      </div>
    );
  }
}
