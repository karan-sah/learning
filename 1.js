/**
 *  Request, try to complete the following functions：
 *
 *  isString('hello')              = true
 *  isString(123)                  = false
 *  isString(undefined)            = false
 *  isString(null)                 = false
 *  isString(new String('hello'))  = true
 *
 **/
function isString(value) {

    if (typeof (value) == "string" || value instanceof String) {
        return true;

    } else return false;

}