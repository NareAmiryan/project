'use strict'
import {offerings} from "./types";
import {getResponse} from "./helpers/getResponse"

export const handler = async (event)  =>{
try {
    return getResponse({
        data: offerings
    }, 200)
}catch(err){
    console.log(err);
}
}
