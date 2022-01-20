import React, { Fragment, useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import { Layout, Menu /*Breadcrumb*/ } from 'antd';
import {
    DesktopOutlined,
    //PieChartOutlined,
    //FileOutlined,
    UserOutlined,
    UploadOutlined,
    // TeamOutlined,
    // UserOutlined,
} from '@ant-design/icons';

import { Ingresar } from './Ingresar'
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket'
import { Escritorio } from './Escritorio'
import { UIContext } from '../context/UIContext';

const { /*Header,*/ Content, Footer, Sider } = Layout;
//const { SubMenu } = Menu;

export const RouterPage = () => {

    const {ocultarMenu} = useContext(UIContext)

    return (
        <Router>
            <Fragment>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsedWidth="0" breakpoint='md' hidden={ocultarMenu} >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink to="/">
                                    Ingresar
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                <NavLink to="/cola">
                                    Cola
                                </NavLink>
                            </Menu.Item>
                            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu> */}
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <NavLink to="/crear-ticket">
                                    Crear Ticket
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">

                        <Content style={{ margin: '0 16px' }}>
                            <br />
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                
                                <Routes>
                                    <Route path="/" element={<Ingresar />}></Route>
                                    <Route path="/cola" element={<Cola />}></Route>
                                    <Route path="/crear-ticket" element={<CrearTicket />}></Route>
                                    <Route path="/escritorio" element={<Escritorio />}></Route>
                                    <Route path="*" element={<><h1>Page not found :c </h1></>}> </Route>
                                </Routes>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Juan Solares ©2022 Created by juan333</Footer>
                    </Layout>
                </Layout>

            </Fragment>

        </Router>

    )
}
