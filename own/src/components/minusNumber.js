export default function minusNumber(props) {
    if(props.totalNumber === 0){
        return{StringNumber: props.StringNumber,totalNumber: (props.tmpAdd),tmpAdd: 0,operator: "minus",tmpOP: "minus", CNC_mi: !props.CNC_mi}
    }
    else if(props.operator === "minus") {
        return{StringNumber: (props.totalNumber-props.tmpAdd), totalNumber: (props.totalNumber-props.tmpAdd),tmpAdd: 0, operator: "minus",tmpOP: "minus", CNC_mi: !props.CNC_mi}
    }
    
    else if(props.operator === "plus"){
        return{StringNumber: (props.totalNumber+props.tmpAdd),totalNumber: (props.totalNumber+props.tmpAdd),tmpAdd: 0, operator: "minus", tmpOP: "minus",CNC_mi:!props.CNC_mi}
    }
    else if (props.operator === "mul" || props.operator === "manymul"){
        return{StringNumber: (props.totalNumber*props.tmpAdd),totalNumber: (props.totalNumber*props.tmpAdd),tmpAdd: 0, operator: "minus", tmpOP: "minus",CNC_mi:!props.CNC_mi}
    }
    else if (props.operator === "divi" || props.operator === "manydivi"){
        return{StringNumber: (props.totalNumber/props.tmpAdd),totalNumber: (props.totalNumber/props.tmpAdd),tmpAdd: 0, operator: "minus", tmpOP: "minus",CNC_mi:!props.CNC_mi}
    }
    
}