import * as React from 'react';
import './UserPage.css';
import { Link } from 'react-router-dom';

class UserPage extends React.Component {
	render() {
		return (
			<div>
				<div className="container-fluid wrapper">
					<div id="naviBox">
						<Link to="/"><span className="glyphicon glyphicon-plus pull-left" /></Link>
						<Link to="/"><span className="glyphicon glyphicon-cog pull-right" /></Link>
					</div>
					<br />
					<h1 className="text-center">Ideas</h1>
					<div className="row">
						<div id="info" className="col-md-4">
							<div id="avatar" className="text-center">X</div>
							<div className="text-center">
								<h4>Username</h4>
							</div>
							<ul className="bioList">
								<li>Pomysłów: <span className="pull-right">10</span> </li>
								<li>Rozwiązań: <span className="pull-right">5</span> </li>
								<li>Komentarzy: <span className="pull-right">30</span> </li>
							</ul>
							<hr />
							<div id="bio">
								Sed posuere eros neque, sed blandit sem malesuada ac. Cras a sem venenatis, dapibus dui eu, rhoncus tortor. Fusce at odio vitae mi interdum ornare. Praesent imperdiet feugiat nunc, et tincidunt lectus interdum et.
							</div>
						</div>
						<div id="activity" className="col-md-8" >
							<div className="row text-center">
								<div className="col-md-6">
									<button className="btn btn-default ideaLink">
									Rozwiązanie <br/>
									<b>Ut ultricies dictum ante non elementum.</b>
									</button>
								</div>
								<div className="col-md-6">
									<button className="btn btn-default ideaLink">
									Rozwiązanie <br/>
									<b>Ut ultricies dictum ante non elementum.</b>
									</button>
								</div>
							</div>
							<div className="row text-center">
								<div className="col-md-6 text-center">
									<button className="btn btn-default ideaLink">
									Rozwiązanie <br/>
									<b>Ut ultricies dictum ante non elementum.</b>
									</button>
								</div>
								<div className="col-md-6 text-center">
									<button className="btn btn-default ideaLink">
									Rozwiązanie <br/>
									<b>Ut ultricies dictum ante non elementum.</b>
									</button>
								</div>
							</div>
							<div className="row text-center">
								<div className="col-md-6 text-center">
									<button className="btn btn-default ideaLink">
									Rozwiązanie <br/>
									<b>Ut ultricies dictum ante non elementum.</b>
									</button>
								</div>
								<div className="col-md-6 text-center">
									<button className="btn btn-default ideaLink">
									Rozwiązanie <br/>
									<b>Ut ultricies dictum ante non elementum.</b>
									</button>
								</div>
							</div>
							<hr />
							<div>
								<h4>Ostatnia aktywność</h4>
								<div className="text-center">
									<button className="btn btn-default activityLink">
										<span className="pull-left"> Skomentował <Link to="#"><b>pomysł1</b></Link></span><br/>
										<span className="pull-left"><i>Etiam porttitor velit orci, at eleifend libero consectetur at. Sed venenatis id leo vulputate commodo.</i></span>
									</button>
								</div>
								<div className="text-center">
									<button className="btn btn-default activityLink">
										<span className="pull-left"> Skomentował <Link to="#"><b>pomysł2</b></Link></span><br/>
										<span className="pull-left"><i>Etiam porttitor velit orci, at eleifend libero consectetur at. Sed venenatis id leo vulputate commodo.</i></span>
									</button>
								</div>
								<div className="text-center">
									<button className="btn btn-default activityLink">
										<span className="pull-left"> Skomentował <Link to="#"><b>pomysł3</b></Link></span><br/>
										<span className="pull-left"><i>Etiam porttitor velit orci, at eleifend libero consectetur at. Sed venenatis id leo vulputate commodo.</i></span>
									</button>
								</div>
								<div className="text-center">
									<button className="btn btn-default activityLink">
										<span className="pull-left"> Skomentował <Link to="#"><b>pomysł4</b></Link></span><br/>
										<span className="pull-left"><i>Etiam porttitor velit orci, at eleifend libero consectetur at. Sed venenatis id leo vulputate commodo.</i></span>
									</button>
								</div>
								<div className="text-center">
									<button className="btn btn-default activityLink">
										<span className="pull-left"> Skomentował <Link to="#"><b>pomysł5</b></Link></span><br/>
										<span className="pull-left"><i>Etiam porttitor velit orci, at eleifend libero consectetur at. Sed venenatis id leo vulputate commodo.</i></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserPage;