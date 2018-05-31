import React from 'react';
import { View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux'


export default class Scene1 extends React.Component{
	render()
	{
		return(
			<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
		       <Text onPress={()=>this.navigate()}>Goto Scene2</Text>
		       </View>
			)
	}
	navigate()
	{
		Actions.scene2();

	}
	
}