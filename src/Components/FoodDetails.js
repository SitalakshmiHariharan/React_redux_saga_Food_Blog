import React from 'react'

class FoodDetails extends React.Component{
    render(){
        const {params}  = this.props.match       
        return (
            <div>
                  <center><h2>RECIPE</h2></center>
                  <p>{params.id}</p>                
            </div>
        )
       
    }
}

export default FoodDetails 