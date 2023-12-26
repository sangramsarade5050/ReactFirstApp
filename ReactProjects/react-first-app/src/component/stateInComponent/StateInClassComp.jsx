
import React, { Component } from 'react';

class StateInClassComp extends Component{

    constructor(props){

        super(props)

        this.name ="Anand";

        this.state={
            userName :'Siddesh'
        }

        this.state={
            number:12,
            sName:'Mahesh',
            flag:true,
            arrayValue:[1,2,3,4,5,6,7,8,9],
            person:{
                name:'tejas',
                add:'Pune'
            }
        }
    }
      
    userChange(){
        //alert('User Changed Function Called ')
        console.log('Button Clicked ')
        this.name ="Sarika"
        console.log(this.name);
    }
    changeUserName(){
        //alert ('Inside changeUserName')
        this.setState({userName:'Admin'})
    }
    render(){
       
        return(
            <>
               <h1> State In Class Components </h1>
           <h4> Name is :{this.name}</h4>
           <button onClick={this.userChange.bind(this)} > Change User</button>

           <h4> User Name Is:{this.state.userName}</h4>
           <button onClick={this.changeUserName.bind(this)}> User Name Change </button>

            <p> Number is:{this.state.number}</p>
            <p> Name is:{this.state.sName}</p>
            <p> Number is:{this.state.flag?"true":"False"}</p>
            <p> arrayValue is:{this.state.arrayValue.join(',')}</p>
            <p> Object Value is:{JSON.stringify(this.state.person)}</p>
            </>
        )
        
    
    }


}

export default  StateInClassComp ;