import React from 'react'

import routes from '@/pages'
import { Route, Switch, Redirect } from 'react-router-dom'


export default props=>{  // eslint-disable-line

    // 生成路由匹配规则，当url和Route.path匹配成功，显示当前配对成功的Route.component
    // 凡是被 Route 组件直接包裹的React组件中，其props上都有路由相关的API
    const createRoutes = ()=>{
        let res = []
        // 这是递归方法
        function recursionRoute(arr){
            arr.map(ele=>{
                res.push(
                    <Route 
                        key={ele.id} 
                        path={ele.path} 
                        component={ele.component} 
                        exact
                    />
                )
                if(ele.children) recursionRoute(ele.children)
                return undefined
            })
        }
        routes.map(ele=>{
            if(ele.children){
            // 调用递归方法，生成 Route 数组
            recursionRoute(ele.children)
            }
            return undefined
        })
        return res
    }
    
    return (
        <div className="tt-main">
            {/* 
                作用：用于把 Route数组组件包裹起来，当url变化时从上到下进行匹配，匹配成功即终止
                当Route数组被包裹起来，建议给 Route都加上exact属性
                在生成 Route 数组时，其外层不能包裹任何其它HTML节点，他的直接父组件只能是 Switch
            */}
            <Switch>
                { createRoutes() }
                <Redirect from='/*' to='/' />
            </Switch>
        </div>
    )
}

{/* 
<Switch>
    <Route path="/a"></Route>
    <Route path="/a/"></Route>
</Switch> 
*/}
// /#/a 
// 在Switch包裹情况下，会执行第一个Route，
// 没包裹执行第二个，第二个会覆盖第一个