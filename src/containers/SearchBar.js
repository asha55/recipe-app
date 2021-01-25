import React from 'react'
import './searchbar.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RecepieInfo from '../Actions/index'
class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={
            term:""
        }
    }
    OnChangehandler=(event)=>{
        this.setState({term:event.target.value})
    }
    onSubmitButton=(event)=>{
        event.preventDefault();
        this.setState({term:""})
        console.log(this.state)
        this.props.Info(this.state)

    }
    render(){
        return(
            <div className="searchbar">
               <input className="search-input" placeholder="enter recipe name" type="text" value={this.state.term} name="term" onChange={this.OnChangehandler}/>
               <button className="search-button" onClick={this.onSubmitButton}>search</button>
            </div>
        )
        
    }

}
function mapDispatchToProps(Dispatch){
    return bindActionCreators({Info:RecepieInfo},Dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar)