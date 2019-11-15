import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// 匿名投诉
import Complaint from '../../components/Complaint/Complaint'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Acontent = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    学员后台
                    </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/nav1/option1">匿名投诉</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/nav1/option2">技术问题</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/nav1/option3">项目上传</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/nav1/option4">VIP</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    subnav 2
                    </span>
                            }
                        >
                            <Menu.Item key="5"><Link to="/nav1/option5">option5</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/nav1/option6">option6</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/nav1/option7">option7</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/nav1/option8">option8</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="notification" />
                                    subnav 3
                    </span>
                            }
                        >
                            <Menu.Item key="9"><Link to="/nav1/option9">option9</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/nav1/option10">option10</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/nav1/option11">option11</Link></Menu.Item>
                            <Menu.Item key="12"><Link to="/nav1/option12">option12</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Switch>
                        <Route path="/nav1/option1">
                            <Complaint/>
                        </Route>
                        <Route path="/nav1/option2">
                            <div>option2</div>
                        </Route>
                        <Route path="/nav1/option3">
                            <div>option3</div>
                        </Route>
                        <Route path="/nav1/option4">
                            <div>option4</div>
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Content>
    )
}


export default class Alayout extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/nav1">学生管理</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/nav2">教学管理</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/nav3">成绩管理</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route path="/nav1">
                            <Acontent />
                        </Route>
                        <Route path="/nav2">
                            <div>nav2</div>
                        </Route>
                        <Route path="/nav3">
                            <div>nav3</div>
                        </Route>
                    </Switch>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Router>
        )
    }
}