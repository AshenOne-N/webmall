export const constantRoute = [
    {
        //登录
        path:'/login',
        component:()=> import ('@/views/login/index.vue'),
        name:'login',
        meta:{
            title:'登录',
            show:false
        }
    },
    {
        //登陆成功展示
        path:'/',
        component:()=> import ('@/layout/index.vue'),
        name:'layout',
        meta:{
            title:'欢迎',
            show:false,
            icon:"Promotion"
        },
        redirect:'/home',
        children:[
            {
                path:'/home',
                component:()=> import ('@/views/home/index.vue'),
                name:'home',
                meta:{
                    title:'主页',
                    show:true,
                    icon:"HomeFilled"
                }
            },
        ]
    },
    {
        path:'/screen',
        component:()=>import('@/views/screen/index.vue'),
        name:'screen',
        meta:{
            title:'数据大屏',
            show:true,
            icon:'Platform'
        }
    },
    {
        path:'/acl',
        component:()=>import('@/layout/index.vue'),
        name:'acl',
        meta:{
            title:'权限管理',
            show:true,
            icon:'Lock'
        },
        redirect:'/acl/user',
        children:[
            {
                path:'/acl/user',
                component:()=>import('@/views/acl/user/index.vue'),
                name:'acl',
                meta:{
                    title:'用户管理',
                    show:true,
                    icon:'User'
                }
            },
            {
                path:'/acl/role',
                component:()=>import('@/views/acl/role/index.vue'),
                name:'role',
                meta:{
                    title:'角色管理',
                    show:true,
                    icon:'UserFilled'
                }
            },
            {
                path:'/acl/permission',
                component:()=>import('@/views/acl/permission/index.vue'),
                name:'permission',
                meta:{
                    title:'菜单管理',
                    show:true,
                    icon:'Monitor'
                }
            }
          
        ]
    },
    {
        path:'/product',
        component:()=>import('@/layout/index.vue'),
        name:'Product',
        meta:{
            title:'商品管理',
            show:true,
            icon:'Goods'
        },
        redirect:'/product/trademark',
        children:[
            {
                path:'/product/trademark',
                component:()=>import('@/views/product/trademark/index.vue'),
                name:'Trademark',
                meta:{
                    title:'品牌管理',
                    show:true,
                    icon:'ShoppingCartFull'
                }
            },
            {
                path:'/product/spu',
                component:()=>import('@/views/product/spu/index.vue'),
                name:'Spu',
                meta:{
                    title:'SPU管理',
                    show:true,
                    icon:'Calendar'
                }
            },
            {
                path:'/product/sku',
                component:()=>import('@/views/product/sku/index.vue'),
                name:'Sku',
                meta:{
                    title:'SKU管理',
                    show:true,
                    icon:'Orange'
                }
            },
            {
                path:'/product/attr',
                component:()=>import('@/views/product/attr/index.vue'),
                name:'Attr',
                meta:{
                    title:'属性管理',
                    show:true,
                    icon:'ChromeFilled'
                }
            }
        ]

    },
    {
        //404
        path:'/404',
        component:()=> import ('@/views/404/index.vue'),
        name:'404',
        meta:{
            title:'404',
            show:false,
            icon:"DataLine"
        }
    },
    {
        //任意
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'any',
        meta:{
            title:'任意',
            show:false
        }
    },
]