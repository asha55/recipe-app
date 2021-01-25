import React from 'react'
class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state={
            isErrorOccured:false,
            errorMessage:""
        }
    }
    componentDidCatch=(error,info)=>{
        this.setState({isErrorOccured:true,errorMessage:error})
    }
    render(){
        if(this.state.isErrorOccured){
            return <h1>somthing went wrong</h1>
        }
        else{
            return<div>{this.props.children}</div>
        }

    }

   

}
export default ErrorBoundary