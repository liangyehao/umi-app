import {testGithub,testSouhu,testDouban} from '../../services/test/service'

export default {
    namespace:'hello',
    state:{
        arr:[{id:1,title:'测试一'},{id:2,title:'测试er'}]
    },
    effects:{
        *testGithub({payload},{call,put,select}){
           const res =  yield call(testGithub);
           console.log(res,'testGithub')
        },
        *testSouhu({payload},{call,put,select}){
            const res =  yield call(testSouhu);
            console.log(res,'testSouhu')
        },
        *testDouban({payload},{call,put,select}){
            const res =  yield call(testDouban);
            console.log(res,'testDouban')
        }
    },
    reducers:{

    }
}