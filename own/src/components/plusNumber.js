export default function plusNumber(props) {
    if(props.totalNumber === 0){
        return{StringNumber: props.StringNumber,totalNumber: (props.tmpAdd),tmpAdd: 0,operator: "plus",tmpOP: "plus", CNC_mi: !props.CNC_p}
    }
    else if(props.operator === "plus") {
        return{StringNumber: (props.totalNumber+props.tmpAdd), totalNumber: (props.totalNumber+props.tmpAdd),tmpAdd: 0, operator: "plus",tmpOP: "plus", CNC_mi: !props.CNC_p}
    }
    
    else if(props.operator === "minus"){
        return{StringNumber: (props.totalNumber-props.tmpAdd),totalNumber: (props.totalNumber-props.tmpAdd),tmpAdd: 0, operator: "plus", tmpOP: "plus",CNC_p:!props.CNC_p}
    }
    else if (props.operator === "mul" || props.operator === "manymul"){
        return{StringNumber: (props.totalNumber*props.tmpAdd),totalNumber: (props.totalNumber*props.tmpAdd),tmpAdd: 0, operator: "plus", tmpOP: "plus",CNC_p:!props.CNC_p}
    }
    else if (props.operator === "divi" || props.operator === "manydivi"){
        return{StringNumber: (props.totalNumber/props.tmpAdd),totalNumber: (props.totalNumber/props.tmpAdd),tmpAdd: 0, operator: "plus", tmpOP: "plus",CNC_p:!props.CNC_p}
    }
    
}