export default function DiviNumber(props){
    if(props.totalNumber === 0){
        return{StringNumber: (props.StringNumber), totalNumber: (props.tmpAdd),tmpAdd: 0,operator: "manydivi",tmpOP:"manydivi",CNC_d: !props.CNC_d}
    }
    else if(props.operator === "divi"){
        return{StringNumber: (props.StringNumber), totalNumber: (props.totalNumber),tmpAdd: 0, operator: "manydivi",tmpOP:"manydivi",CNC_d: !props.CNC_d}
    }
    else if(props.operator === "manydivi"){
        return{StringNumber: (props.totalNumber)/(props.tmpAdd), totalNumber: (props.totalNumber) / (props.tmpAdd),tmpAdd: 0,tmpOP:"manydivi", CNC_d: !props.CNC_d}
    }
    else{
        if(props.operator === "plus"){
            return{StringNumber: (props.totalNumber+props.tmpAdd),totalNumber: (props.totalNumber+props.tmpAdd),tmpAdd: 0, operator: "manydivi", tmpOP: "manymul",CNC_d:!props.CNC_d}
        }
        else if (props.operator === "minus"){
            return{StringNumber: (props.totalNumber-props.tmpAdd),totalNumber: (props.totalNumber-props.tmpAdd),tmpAdd: 0, operator: "manydivi", tmpOP: "manydivi",CNC_d:!props.CNC_d}
        }
        else if (props.operator === "mul" || props.operator === "manymul"){
            return{StringNumber: (props.totalNumber*props.tmpAdd),totalNumber: (props.totalNumber*props.tmpAdd),tmpAdd: 0, operator: "manydivi", tmpOP: "manydivi",CNC_d:!props.CNC_d}
        }
    }
}