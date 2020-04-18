import umiRequest from 'umi-request';

export async function testGithub() {
    return umiRequest.get('/github/users/liangyehao');
}
export async function testSouhu() {
    return umiRequest.get('/api/cityjson');
}

export async function testDouban() {
    return umiRequest.get('/douban/j/search_tags?type=movie&source=index');
}