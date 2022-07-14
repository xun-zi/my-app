import React from 'react';
import './App.less';
import BottomNavigation from './component/BottomNavigation/BottomNavigation';
import { data } from './component/BottomNavigation/BottomNavigation';
import WinXinContent from './component/WinXinContent/WinXinContent';
import WeiXinChatCard from './component/WinXinContent/WinXinContent';
import TopNavigation from './component/TopNavigation/TopNavigation';
import { Routes,Route} from 'react-router-dom';
import Chat from './page/Chat/Chat';
import indexeddb from './indexdb/index'
const NavigationDatas = [
  {
    className:'fa fa-comments',
    name:'微信'
  },
  {
    className:'fa fa-address-book',
    name:'通讯录'
  },
  {
    className:'fa fa-eye',
    name:'发现'
  },
  {
    className:'fa fa-user',
    name:'微信'
  }
]
const WinXinContentData = [
  {
    id:'1',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },{
    id:'2',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },
  {
    id:'1',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },{
    id:'2',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },
  {
    id:'1',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },{
    id:'2',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },
  {
    id:'1',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },{
    id:'2',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },
  {
    id:'1',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },{
    id:'2',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },
  {
    id:'1',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },{
    id:'2',
    picture:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qingruanit.net%2FcatchImages%2F20161209%2F1481250716224096613.png&refer=http%3A%2F%2Fwww.qingruanit.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660291755&t=a7701cf1e8af5503d1c8fb33bae20cbd',
    name:'贪心的小马',
    message:'端粒豪华：一人之下',
    time:new Date(),
    bell:0
  },
]
function App() {
  // indexeddb.openDB('Chat',1).then((db)=>{
  //   for(let i = 0;i < 500;i ++){
  //     indexeddb.addData(db,'signalChat',{
  //         sequenceId:i,
  //         content: i + '消息',
  //         user:i%2,
  //     })
  //   }
  // })
  
  return (
    
    <div className="App">
        {/* <TopNavigation/>
        <Routes>
        <Route path='/' element={<WinXinContent datas={WinXinContentData}/>}></Route>
        </Routes> */}
        <div>1</div>
        <Chat/>
        {/* <BottomNavigation datas={NavigationDatas}/> */}
    </div>
    
  );
}

export default App;
