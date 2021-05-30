import React ,{Component} from 'react'
import FoodItem from './FoodItem'
import {connect} from 'react-redux'
import Loading from './Loading'

import { fetchFoodsBegin } from "../Actions/FoodActions"
import { bindActionCreators} from 'redux';

class FoodList extends Component{

   componentDidMount(){
       this.props.fetchFoodsBegin()
   }

    render(){     
        const list= this.props.foods && this.props.foods.map((item)=><FoodItem key={item.id} entity={item}></FoodItem>)
        console.log('list:',list)
        return (
            <div>
                <Loading/>
                {list}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log('mapStateToProps',state)
      return {
          foods:state.preducer.items
      }
  }  

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchFoodsBegin},dispatch)
}

  export default connect(mapStateToProps,mapDispatchToProps)(FoodList)