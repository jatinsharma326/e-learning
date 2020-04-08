import React ,{Component} from 'react';
import './hometop.scss';
import {Button} from '@material-ui/core';
import MediaCard from './projectcards';


class HomeTop extends Component{
    render(){

        return(
          <div>
            <div>
                       <div className="bg" >
                        <div className = 'cover'>
                        <span className = 'vwa'>Place For Your Course</span><br/>
                        <span class='vwa'>To Get Better UnderStanding</span><br/>
                        <Button variant = 'contained' color = 'secondary'  >SignUp To Get Started</Button>
                        
                        </div>
                        </div>
            </div><br/>
            <div>
            <MediaCard></MediaCard>
            </div>
            </div>
        )
    }
}
export default HomeTop;