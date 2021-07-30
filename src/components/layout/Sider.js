import React from 'react'

import { Menu } from 'antd';

import routes from '@/pages'

import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;

export default props=>{  // eslint-disable-line

    // 用于生成菜单
    const createNavLink = ()=>{
        // exact=true,当url和NavLink.to 完全相等才高亮
        // exact=false,当uel和NavLink.to 相似就高亮
        return routes.map(ele=>(
            <SubMenu key={ele.id} icon={ele.icon}  title={ele.text}>
                {
                    ele.children && ele.children.map(ele=>(
                        <Menu.Item key={ele.id}>
                            <NavLink 
                                to={ele.path} 
                                exact={!ele.notExact}  // 解决高亮样式问题
                            >
                                {ele.text}
                            </NavLink>
                        </Menu.Item>
                    ))
                }
            </SubMenu>
        ))
    }

    return (
        <div className="tt-sider">
            <Menu
                defaultSelectedKeys={['1010']}
                defaultOpenKeys={['10']}
                mode="inline"
                theme="dark"
            >
                { createNavLink() }
            </Menu>
        </div>
    )
}