import * as React from 'react';
import './IdeaPage.css';
import { Link } from 'react-router-dom';

class IdeaPage extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div id="naviBox">
                        <Link to="/"><span className="glyphicon glyphicon-home pull-left"/></Link>
                        <Link to="/"><span className="glyphicon glyphicon-cog pull-right"/></Link>
                    </div>
                    <br/>
                    <div id="ideaBox">
                        <h1 className="text-center">Idea Title</h1>
                        <h5 className="text-center">
                        Etiam a porttitor ex, sit amet finibus mi. Pellentesque urna massa, lobortis eget varius non, eleifend sit amet leo. Praesent laoreet molestie metus iaculis rhoncus.
                        </h5>
                        <div id="statusBox" className="pull-right">
                            In progress
                        </div>
                        <div id="description" className="text-center">
                            <p className="text-left">Praesent euismod turpis ac magna commodo, eu tincidunt magna gravida. Maecenas vulputate lorem eu tempor lacinia. Nam vehicula vehicula est, volutpat blandit eros pharetra eu. Praesent at dignissim arcu, in ornare tortor. Aenean eget ipsum nec turpis eleifend dictum. Vestibulum et odio lobortis, volutpat felis ac, tempus risus. Nam posuere, nibh non iaculis eleifend, ante ante pellentesque enim, non scelerisque quam leo id nulla. Sed imperdiet lobortis nunc, et consectetur massa molestie ac. Proin ullamcorper dolor eu libero facilisis luctus. Phasellus lectus orci, suscipit id semper et, laoreet a magna. Fusce mattis mauris at mi varius tincidunt.</p>
                        </div>
                        <div className="row">
                            <h4 className="col-md-4">
                                <p>Tags:</p>
                                <Link to="#">#tag1</Link>&nbsp;
                                <Link to="#">#tag2</Link>&nbsp;
                                <Link to="#">#tag3</Link>&nbsp;
                            </h4>
                        </div>
                        <div className="row">
                            <h4 className="col-md-4">
                                <p>Share:</p>
                                <a className="btn btn-social-icon btn-facebook">
                                    <span className="fa fa-facebook"/>
                                </a>
                                &nbsp;
                                <a className="btn btn-social-icon btn-google">
                                    <span className="fa fa-google"/>
                                </a>
                                &nbsp;
                                <a className="btn btn-social-icon btn-twitter">
                                    <span className="fa fa-twitter"/>
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div id="commentsBox">
                        <h3 className="text-left">Comments</h3>
                        <ul>
                            <li>
                                <div className="comment">
                                    <blockquote>
                                        <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                                        <footer><Link to="#">User1</Link></footer>
                                    </blockquote></div>
                            </li>
                            <li>
                                <div className="comment">
                                    <blockquote>
                                        <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                                        <footer><Link to="#">User2</Link></footer>
                                    </blockquote></div>
                            </li>
                            <li>
                                <div className="comment">
                                    <blockquote>
                                        <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                                        <footer><Link to="#">User3</Link></footer>
                                    </blockquote></div>
                            </li>
                            <li>
                                <div className="comment">
                                    <blockquote>
                                        <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                                        <footer><Link to="#">User4</Link></footer>
                                    </blockquote></div>
                            </li>
                            <li>
                                <div className="comment">
                                    <blockquote>
                                        <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                                        <footer><Link to="#">User5</Link></footer>
                                    </blockquote></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

// function setStatusColor() {
//     let color = "blue";
//     let box = document.getElementById("description");
//     let ribbon = document.getElementById("statusBox");
//     if (box == null || ribbon == null)
//     {
//         return;
//     }

//     box.style.borderColor = color;
//     ribbon.style.backgroundColor = color;
// }

export default IdeaPage;