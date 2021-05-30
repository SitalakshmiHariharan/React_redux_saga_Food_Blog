import React ,{Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'

class FoodItem extends Component{
   
    constructor(props){
        super(props)
        this.state={
          entity : props.entity
        }
    }
    render(){
        console.log(this.state.entity)
        return (
            <div>
                <Card style={{ width: '18rem',height:'41rem',float:'left'}}>
                    <Card.Img variant="top" src={this.state.entity.img} />
                    <Card.Body>
                        <Card.Title>{this.state.entity.name}</Card.Title>
                        <Card.Text>
                        {this.state.entity.type}                    
                        </Card.Text>                        
                        <a class="btn btn-success" href={`/food/${this.state.entity.recipe}`} role="button">Interested ?</a>
                    </Card.Body>
                </Card>
            </div>        
        )
    }
}

export default  FoodItem 

