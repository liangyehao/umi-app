/**
 * 代理配置
 */
// const proxy = {
//     '/api': {
//         target: 'http://pv.sohu.com', //  需修改为真实后端服务地址
//         changeOrigin: true,
//         pathRewrite: { "^/api" : "" }
//     },
//     '/github': {
//         target: 'https://api.github.com', //  需修改为真实后端服务地址
//         changeOrigin: true,
//         pathRewrite: { "^/github" : "" }
//     },
// };

import {proxy} from './custom.config.js'



export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }],
    ],
    proxy:proxy
}