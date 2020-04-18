export const proxy = {
    '/api': {
        target: 'http://pv.sohu.com', //  需修改为真实后端服务地址
        changeOrigin: true,
        pathRewrite: { "^/api" : "" }
    },
    '/github': {
        target: 'https://api.github.com', //  需修改为真实后端服务地址
        changeOrigin: true,
        pathRewrite: { "^/github" : "" }
    },
    '/douban': {
        target: 'https://movie.douban.com', //  需修改为真实后端服务地址
        changeOrigin: true,
        pathRewrite: { "^/douban" : "" }
    },
};
