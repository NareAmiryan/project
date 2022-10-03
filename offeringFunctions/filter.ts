'use strict'
import {offeringsPremium} from "../types";
import {getResponse} from "../helpers/getResponse"

export const filterCategories = async (event)  =>{
    try {
        const object = offeringsPremium.map(elem => {
            return {
                unique_id: elem.unique_id,
                structure_name: elem.structure_name,
                asset_class_id: elem.asset_class_id,
                strategy_name: elem.strategy_name,
                sector_name: elem.sector_name
            }
        })
        return getResponse({
            data: object
        },200);
    }catch(err){
        console.log(err);
    }
}
