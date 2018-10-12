import React from 'react'
import { Drawer, Button, Radio } from 'antd'
import Nav from './Nav'
import './thedrawer.sass'

class TheDrawer extends React.Component {
	state = { visible: false };

	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div className="humburger">
				<Button type="primary" onClick={this.showDrawer}
				>
				</Button>
				<Drawer
					title=""
					placement="right"
					closable={true}
					onClose={this.onClose}
					visible={this.state.visible}
				>
				<Nav />
				</Drawer>
			</div>
		);
	}
}


export default TheDrawer
