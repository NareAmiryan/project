'use strict'
import {offeringsPremium} from "../types";
import {getResponse} from "../helpers/getResponse"

export const match = async (event)  =>{
    try {
        console.log(event);
        let {structure_name,asset_class_id,strategy_name,sector_name} = JSON.parse(event.body);
        const object = offeringsPremium.map(elem => {
            return {
                unique_id: elem.unique_id,
                structure_name: elem.structure_name,
                asset_class_id: elem.asset_class_id,
                strategy_name: elem.strategy_name,
                sector_name: elem.sector_name
            }
        }).filter(item => {
            console.log("structure name before" + structure_name)
            console.log("item struct name " + item.structure_name);
            if(structure_name == "null"){
                structure_name = item.structure_name
            }
            console.log("structure name after" + structure_name);
            if(asset_class_id == "null"){
                asset_class_id = item.asset_class_id
            }
            if(strategy_name == "null"){
                strategy_name = item.strategy_name
            }
            if(sector_name == "null"){
                sector_name = item.sector_name
            }
            return item.sector_name == sector_name &&  item.structure_name == structure_name
                && item.asset_class_id==asset_class_id && item.strategy_name == strategy_name;
        });
        return getResponse({
            data: object
        },200);
    }catch(err){
        console.log(err);
    }
}
