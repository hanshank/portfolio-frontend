import React from 'react';

const MenuToggleButton = props =>  {
  let iconClass = props.iconClass;
  let iconContainerClass = props.iconContainerClass;
  return(
    <div>
      <div className={iconContainerClass} onClick={props.click}>
        <icon className={iconClass}></icon>
      </div>
    </div>
  );
}


export default MenuToggleButton;
