import React from 'react'

import { Layout } from 'antd';

import TtSider from './Sider'
import TtHeader from './Header'
import TtMain from './Main'

import './style.scss'

const { Header, Sider, Content } = Layout;


export default props=>{  // eslint-disable-line
    return (
        <div className="tt-layout">
            <Layout>
                <Sider width="150px">
                    <TtSider />
                </Sider>
                <Layout>
                    <Header>
                        <TtHeader />
                    </Header>
                    <Content>
                        <TtMain />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}