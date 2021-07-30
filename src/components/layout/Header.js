import React from 'react'

import { useHistory } from 'react-router-dom'

// 问题：没有被Route组件直接包裹的React组件中，是没有路由API的。
// 在类组件中，只能使用 withRouter 来解决问题
// 在无状态组件中，可以使用 withRouter，也可以使用 useHistory来解决问题。

// withRouter 是一个高阶组件，作用是：让那些没有被Route直接包裹的React组件拥有路由API
// useHistory 是ReactRouter提供的Hooks API，帮助我们在无状态组件中使用路由API



// 一、使用Hooks写法，来解决React无状态组件中没有路由API的问题

export default props=>{  // eslint-disable-line
    const history = useHistory()
    console.log('---header', props);
    console.log('----header history', history );
    return (
        <div className="tt-header">
            header
        </div>
    )
}

// 二、使用withRouter高阶组件来解决React无状态组件中没有路由API的问题

// export default withRouter(props=>{
//     console.log('---header', props);
//     return (
//         <div className="tt-header">
//             header
//         </div>
//     )
// })

// 使用 withRouter高阶组件，解决React类组件中没有路由API的问题
// 有两种写法：装饰器的写法，或者 ES5函数调用的写法

// @withRouter
// class Header extends React.Component {
//     render(){
//     console.log('---header props', this.props);
//     return (
//             <div className="tt-header">
//                 header
//             </div>
//         )
//     }
// }

// export default withRouter(Header)
// export default Header