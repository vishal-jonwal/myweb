let serachName = prompt('Search Name')
const akashList = [
    [['vishal jonwal'], ['rajangav'], [140]],
    [['vishal dabhahde'], ['vadi'], [180]],
    [['mauli kadam'], ['bajanager'], [210]],
    [['vaibhav kole'], ['vadi'], [240]],
    [['ravi patil'], ['nashik'], [190]],
    [['sneha sharma'], ['pune'], [220]],
    [['amit deshmukh'], ['solapur'], [175]],
    [['meena kale'], ['latur'], [205]],
    [['rohan naik'], ['thane'], [230]],
    [['kiran jadhav'], ['satara'], [260]],
    [['tushar more'], ['beed'], [195]],
    [['priya pawar'], ['akola'], [185]],
    [['anita rao'], ['aurangabad'], [215]],
    [['sunil shinde'], ['nagpur'], [250]]
]
let find = false
for (let i = 0; i<akashList.length; ++i){
    
    if(akashList[i][0][0] === serachName ){
        console.log(akashList[i])
        find = true
    }
}
if(!find){
    console.log('not founded!')
}