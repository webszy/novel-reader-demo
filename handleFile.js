const path =require('path')
const fsa = require('fs-extra')
const fs = require('fs')
const Nzh = require("nzh")
const nzhcn = Nzh.cn
function ext(str){
    if((str.indexOf('第')!==-1)&&(str.indexOf('章')!==-1)){
        let from = str.indexOf('第');
        let to = str.indexOf('章');
        return str.substring(from+1,to)
    }else if(str.indexOf('：')!==-1){
        return str.substring(-1,str.indexOf('：'));
    }else{
        return str;
    }
}

function change(a){
    const temp = {};
    const reg = /^[0-9]*$/;
    for(let i = 0 ;i<a.length;i++ ){
        let t = a[i];
        a[i] = ext(a[i]);
        if(!reg.test(a[i])){
            a[i] = nzhcn.decodeS(a[i]);
        }
        temp[a[i]] = t;
    }
    return temp;
}

function sort(obj){
    const result = [];
    Object.keys(obj).forEach(function(key){
        result.push(obj[key])
    })
    return result;
}

async function getDirectory(){
    const current = path.resolve(__dirname,'./public/books')
    const dirs =  fs.readdirSync(current)
    for(const k of dirs){
        const path1=path.resolve(current,`./${k}`)
        let subDir =  fs.readdirSync(path1)
         subDir = subDir.find(e=>e!=='data.json')
        const path2 = path.resolve(path1,`./${subDir}`)
        const lastDir =  fs.readdirSync(path2)
        const list = sort(change(lastDir))
        const data = {
            sum:lastDir.length,
            title:subDir,
            // list: list.map(e=>`/books/${k}/${subDir}/${e}`)
            list:list.map(e=>({title:e.replace('.json',''),src:`/books/${k}/${subDir}/${e}`}))
        }
        console.log(data)
        fsa.outputFileSync(path.resolve(path1,'./data.json'), JSON.stringify(data,null,4))
    }
}
getDirectory()