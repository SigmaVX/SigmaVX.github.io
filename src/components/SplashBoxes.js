import React, {Component} from "react";


class SplashBoxes extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        backgroundColor: "",
        fontColor: ""
      };
    }

    render() {
        return  (
    
    <div className="box-wrapper">

        {/* Box 1 */}
        <div className="box box-square" id="box1">
            <div className="front">
                <div className="inner">
                    <i className="fab fa-react"></i>
                    <p>Languages</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>React, Node, Express, Mongo DB, SQL, JavaScript, jQuery, HTML5/CSS3, Firebase</p>
                </div>
            </div>
        </div>
        
        {/* Box 2 */}
        <div className="box box-square" id="box2">
            <div className="front">
                <div className="inner">
                    <i className="fas fa-graduation-cap"></i>
                    <p>Education</p>
                </div>
            </div>
            <div className="back">
                <div className="inner ">
                    <p>Rutgers<br/>Duke University<br/>University of Michigan<br/>York College of PA</p>
                </div>        
            </div>
        </div>

        <div className="box-wide" id="imgBox1">
            {/* Image 1 */}
        </div>
        
        
        {/* Box 3 */}
        <div className="box box-square" id="box3">
            <div className="front ">
                <div className="inner">
                    <i className="fas fa-question-circle"></i>
                    <p>Other<br/>Skills</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>Platform Analytics<br/>Online Marketing<br/>Strategic Analysis<br/>User Research<br/>Modeling<br/>Project Management</p>
                </div>
            </div>
        </div>

        <div className="box-long" id="imgBox2">
            {/* Image 2 */}
        </div>

        <div className="box-name" id="tony-title">
            <h1>Tony Wible</h1>
            <p className="animated bounce">Full Stack Developer<br/>Senior PM & Leader</p>
        </div>
            
        <div className="box-square" id="imgBox3">
        {/* Image 3 */}
        </div>


        {/* Box 4 */}
        <div className="box box-square" id="box4">
            <div className="front ">
                <div className="inner">
                    <i className="fas fa-cogs"></i>
                    <p>Leadership</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>Managed International Teams Of Developers, Designers, Analysts, Artists, and Contractors</p>
                </div>
            </div>
        </div>

        <div className="box-long" id="imgBox4">
            {/* Image 4 */}
        </div>
        
        {/* Box 5 */}
        <div className="box box-square" id="box5">
            <div className="front ">
                <div className="inner">
                    <i className="fas fa-building"></i>
                    <p>Industry<br/>Experience</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>Digital Media, Gaming, Entertainment, Broadcast, Streaming, Fintech and Finance</p>
                </div>
            </div>
        </div>

        <div className="box-square" id="imgBox5">
            {/* Image 5 */}
        </div>

        {/* Box 6 */}
        <div className="box box-square" id="box6">
            <div className="front ">
                <div className="inner">
                    <i className="fas fa-lightbulb"></i>
                    <p>Product<br/>Experience</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>Designed and Launched Multi-Platform Mobile Apps and Web Applications From Inception</p>
                </div>
            </div>
        </div>

        {/* Box 7 */}
        <div className="box box-square" id="box7">
            <div className="front ">
                <div className="inner">
                    <i className="fas fa-comment-alt"></i>
                    <p>Development<br/>Philosophy</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>Mobile<br/>Dry<br/>Reliable<br/>Simple<br/>Scalable</p>
                </div>
            </div>
        </div>

       

        {/* Box 8 */}
        <div className="box box-square" id="box8">
            <div className="front ">
                <div className="inner">
                    <i className="fas fa-handshake"></i>
                    <p>Business<br/>Development</p>
                </div>
            </div>
            <div className="back">
                <div className="inner">
                    <p>Senior Relationships Across Multiple Sectors</p>
                </div>
            </div>
        </div>

    </div>
        )
    }
}

export default SplashBoxes; 