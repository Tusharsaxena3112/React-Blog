import React,{Component} from "react";
import Cardlist from "./cardlist";
//import {robots} from './robots';
import Scroll from "./Scroll";
import "tachyons";
import SearchBox from "./SearchBox";

class App extends Component{
	constructor(){
		super()
		this.state={

			robots:[],
			searchfield:""
					}
				}
	onsearchchange=(event)=>{
		this.setState({searchfield:event.target.value})
	}
	// for linking directly through a link
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));

	}
	
	render(){
			const filteredCardlist=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
				return(
					<div className="tc ">
						<h1>ROBOFRIENDS</h1>
						<SearchBox searchChange={this.onsearchchange} />
						<Scroll>
							<Cardlist robots={filteredCardlist}/>
						</Scroll>
					</div>
					)
				}
			}
export default App;