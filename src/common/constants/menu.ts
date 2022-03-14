interface MenuChildren{
    label: string;
    url: string;
}

interface MenuConfig{
    name: string;
    menuChildren: MenuChildren[];
}

export const MENU_CONFIG:MenuConfig[] = [
    {
        name: '营销资源',
        menuChildren: [
            {
                label: '慕课APP',
                url: '',
            },
            {
                label: '慕课地图',
                url: '',
            },
            {
                label: '慕课贴吧',
                url: '',
            },
            {
                label: '宝宝知道',
                url: '',
            },
            {
                label: '好看视频',
                url: '',
            },
        ],
    },
    {
        name: '营销产品',
        menuChildren: [
            {
                label: '慕课APP',
                url: '',
            },
            {
                label: '慕课地图',
                url: '',
            },
            {
                label: '慕课小程序',
                url: '',
            },
        ],
    },
    {
        name: '解决方案',
        menuChildren: [],
    },
    {
        name: '营销图谱',
        menuChildren: [
            {
                label: '慕课APP',
                url: '',
            },
            {
                label: '慕课地图',
                url: '',
            },
            {
                label: '慕课小程序',
                url: '',
            },
        ],
    },
];
