const object = {
    chunkArr:(arr,len)=>{
        // Init chunkedArr
        const chunkedArr = [];

        // loop through arr
        arr.forEach(element => {
            // Get last element
            const last = chunkedArr[chunkedArr.length - 1];
            // check if last and if last length is equal to the chunk len

            if(!last || last.length === len){
                chunkedArr.push([element])
            }else{
                last.push(element)
            }
        });
        return chunkedArr;
    }
}

module.exports = object;