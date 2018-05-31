import React from 'react';
import {View,Text} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';
import Scene1 from '../scene/scene1'
import Scene2 from '../scene/scene2'
const Routes=() => {
return(
	 <Router>

	   <Scene key="root">
	     <Scene
	            key="scene1"
	            title='Scene 1'
	            component={Scene1}
	     /> 
	     
	      <Scene 
	             key="scene2"
	            title="Scene 2"
	            component={Scene2}
	     /> 
  
       </Scene>
   
   </Router>
    )

}
export default Routes