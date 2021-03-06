import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index_view'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/welcome_view',
      'pages/account/auth_view',
      'pages/index/index_view',
      'pages/account/account_view',

      'pages/management/management_view',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {
    Taro.setStorageSync('currentTabBar', 1);
    if(Taro.getStorageSync('hasLogin') === '') {
      Taro.setStorageSync('hasLogin', false)
    }
  }

  componentDidShow () {
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
