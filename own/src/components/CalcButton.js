import React from 'react';
import PropTypes from 'prop-types';


function showNotImplemented() {
  /*console.warn('This function is not implemented yet.');*/
  
}

const CalcButton = (props) => {
  const { className, children, onClick } = props;
  //let extraClass = className || '';
  let extraClass;
  if(props.CNC_p === false){
    extraClass = "calc-operator-changeColor";
  }

  else if(props.CNC_mi === false){
    extraClass = "calc-operator-changeColor";
  }

  else if(props.CNC_mu === false){
    extraClass = "calc-operator-changeColor";
  }

  else if(props.CNC_d === false){
    extraClass = "calc-operator-changeColor";
  }

  else{
    extraClass = className;
  }
    return (
    <button
      className={`calc-btn ${extraClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


CalcButton.defaultProps = {
  onClick: showNotImplemented,
};

export default CalcButton;
