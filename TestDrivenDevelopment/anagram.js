// helper function
function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}

function isAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return "Not equivalent"
    }else{
        return formatStr(str1) === formatStr(str2)
    }
    
}

module.exports = isAnagram;