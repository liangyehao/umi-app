/**
 * 代理配置
 */

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