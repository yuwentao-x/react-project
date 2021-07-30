import loadable from '@loadable/component'

const Home = loadable(()=>import('./home/ReduxStudy'))

const routes = [
    {
        id: 11,
        text: '概况管理',
        icon: '',
        children: [
            {
                id: 1110,
                text: '首页',
                path: '/',
                component: Home,
            }
        ]
    }
]

export default routes