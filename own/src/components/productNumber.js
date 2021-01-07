
export default function ProductNumber(props){
        if(props.totalNumber === 0){
            return{StringNumber: (props.StringNumber), totalNumber: (props.tmpAdd),tmpAdd: 0,operator: "manymul",tmpOP: "manymul",CNC_mu: !props.CNC_mu}
        }
        else if(props.operator === "mul"){
            return{StringNumber: (props.StringNumber), totalNumber: (props.totalNumber),tmpAdd: 0, operator: "manymul",tmpOP: "manymul",CNC_mu: !props.CNC_mu}
        }
        else if(props.operator === "manymul"){
            return{StringNumber: (props.totalNumber)*(props.tmpAdd), totalNumber: (props.totalNumber) * (props.tmpAdd),tmpAdd: 0,tmpOP: "manymul",CNC_mu: !props.CNC_mu}
        }
        else{
            if(props.operator === "plus"){
                return{StringNumber: (props.totalNumber+props.tmpAdd),totalNumber: (props.totalNumber+props.tmpAdd),tmpAdd: 0, operator: "manymul", tmpOP: "manymul",CNC_mu:!props.CNC_mu}
            }
            else if (props.operator === "minus"){
                return{StringNumber: (props.totalNumber-props.tmpAdd),totalNumber: (props.totalNumber-props.tmpAdd),tmpAdd: 0, operator: "manymul", tmpOP: "manymul",CNC_mu:!props.CNC_mu}
            }
            else if (props.operator === "divi" || props.operator === "manydivi"){
                return{StringNumber: (props.totalNumber/props.tmpAdd),totalNumber: (props.totalNumber/props.tmpAdd),tmpAdd: 0, operator: "manymul", tmpOP: "manymul",CNC_mu:!props.CNC_mu}
            }
        }
        
}