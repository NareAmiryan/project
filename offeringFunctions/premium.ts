'use strict'
import {offeringsPremium} from "../types";
import {getResponse} from "../helpers/getResponse"

export const offering = async (event)  =>{
    try {
        const {id} = event.pathParameters
        const object = offeringsPremium.find(obj => obj.unique_id == id);
        return getResponse({
            data: object
        },200);
    }catch(err){
        console.log(err);
    }
}
