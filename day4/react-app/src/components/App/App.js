import React from 'react';
// 根组件的样式
import './App.css';
import Header from '../Header/Header'
import Search from '../Search/Search'
import Panel from '../Panel/Panel'
import Footer from '../Footer/Footer'

// 根函数组件
function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <Panel/>
      <Footer/>
    </div>
  );
}

export default App;
