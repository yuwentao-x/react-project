import React, { useEffect } from 'react'

import {
    connect,
    useSelector,
    useDispatch
} from 'react-redux'

import action from '@/store/action'

// connect(fn1,fn2)()

function mapStateToProps(store) {
    return {
        msg: store.msg
    }
}

function mapDispatchToProps(store) {
    return {}
}

// 第1种写法: 使用 connect()+函数式组件
// const Home = props=>{  // eslint-disable-line
//     console.log('home props', props);
//     return (
//         <div>
//             <h1>首页</h1>
//             <hr/>
//             <h2>{props.msg}</h2>
//         </div>
//     )
// }

// 第2中写法：使用 connect()+ 类组件
// class Home extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>首页</h1>
//                 <hr/>
//                 <h2>{this.props.msg}</h2>
//             </div>
//         )
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)


// 第3种写法，使用 hooks + 函数式组件
export default props => {
    const msg = useSelector(store=>store.study.msg)
    const count = useSelector(store=>store.study.foo.count)
    const list = useSelector(store=>store.music.list)
    const dispatch = useDispatch()  // 派发，派发的是actions
    const changeMsg = ()=>{
        // 我现在Home组件中，我想改变store中的msg
        // 触发一个actions，让它到store，再交给reducer
        // reducer是真正修改msg的地方，修改成功返回给store
        // 我Home自动更新
        dispatch(action.changeMsgAction('hello 2011'))
    }

    useEffect(()=>{
        const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=67717160287023663&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
        const params = {}
        str.split('&').map(ele=>{
            let arr = ele.split('=')
            params[arr[0]] = arr[1]
        })
        params.w = decodeURI(params.w)

        dispatch(action.getMusicListAction(params))
        return undefined
    },[])
    
    return (
        <div>
            <h1>首页</h1>
            <hr/>
            <h2>{msg}</h2>
            <button onClick={()=>changeMsg()}>改变msg</button>
            <hr/>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(action.addFooCountAction(100))}>改变count</button>
            <hr/>
            {
                list.map(ele=>(
                    <div key={ele.id}>
                        <span>{ele.id}</span>
                        <span>-----</span>
                        <span>{ele.name}</span>
                    </div>
                ))
            }
         </div>
    )
}



