import React from 'react';
import prelouder from '../../../assets/images/prelouder.gif';


let Prelouder = (props) => {

return(

<div>
{props.isFetching ? <img src={prelouder} /> : null}

</div>
	
)


}	

export default Prelouder;