import * as _ from "lodash";

export default (form , action) => {
        if (action.type == "UPDATE_FIELD"){
            let name    =   action.event.target.name;
            let value   =   action.event.target.value;
            if (action.inputType == 'integer'){
                if (!isNaN(Number(value))){
                    if (name){
                        return _.set(_.clone(form), name, value);
                    }else {
                        return value;
                    }
                }else {
                    var orginalValue = _.get(form, name);
                    if (!orginalValue){
                        return _.set(_.clone(form), name, "");
                    }
                    return form;
                }
            }
            if (name){
                return _.set(_.clone(form), name,value);
            }else {
                return value;
            }
        }
    return form;    
}

