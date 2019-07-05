/**
 *
 *  Try to complete the following functions：
 *
 *  const src = [3, 6, 9]
 *  const target = [1, 6, 8]
 *
 *  const diff = difference(src, target)
 *
 *  console.log(diff) // [3, 9]
 *
 **/
function difference(src, target) {
    var k = src;
    src.length < target.length ? length = target.length : length = src.length
    var arr = [];
    for (let i = 0; i < src.length; i++) {
        for (let j = 0; j < target.length; j++) {
            if (JSON.stringify(src[i]) == JSON.stringify(target[j])) {
                //  console.log("ever here");
                src.splice(i, 1);
            }


        }

    }
    console.log(src)
    return src;
}