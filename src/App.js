import React,{lazy,Suspense}from 'react'
import './App.css'
//import DisplayData from './containers/DisplayData'
//import SearchBar from './containers/SearchBar'
//import RecipeComp from './RecipeComp'
import ErrorBoundary from './ErrorBoundaries'
const DisplayData=lazy(()=>import('./containers/DisplayData'))
const SearchBar = lazy(() => import('./containers/SearchBar'))
const  RecipeComp= lazy(()=> import('./RecipeComp'))


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <ErrorBoundary>
        <Suspense fallback={<h1>Loading...</h1>}>
        
        <SearchBar/>
 
        <DisplayData/>
        
       
        </Suspense>
        </ErrorBoundary>
        </div>

      
    )
  }
}
export default App;


