import 'pg'
import {connect} from "../../utils/dataConnection";
import {getResponse} from "../../utils/getResponse";

module.exports.offeringsPremium = async (event) => {
    try {
        const {Offering} = await connect();
        console.log(Offering);

        const {offering_id} = JSON.parse(event.body);
        console.log(offering_id)

        return getResponse({
            data: offering_id
        },200)
    }catch(err){
        console.log(err);
    }
};
