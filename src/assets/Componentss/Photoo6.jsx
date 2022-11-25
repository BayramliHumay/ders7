import React,{Component}from "react"
import './stylee.css'
class Photoo6 extends Component {

    state = {
        name:"" ,
        surname:"",
        fname:"",
        phone:"",
         email:"",
         
    
        };
        handleName = (e) => {
            this.setState({name:e.target.value});
        }
        handleSurname = (e) => {
            this.setState({surname:e.target.value});
        }
        handleFname = (e) => {
            this.setState({fname:e.target.value});
        }
        handlePhone = (e) => {
            this.setState({phone:e.target.value});
        }
        
        handleEmail = (e) => {
            this.setState({email:e.target.value});
        }
        
        handlerClick1  = (e) =>{
            this.setState({name:''})
        }
        handlerClick2  = (e) =>{
            this.setState({surname:''})
        }
        handlerClick3 = (e) =>{
            this.setState({fname:''})
        }
        handlerClick4 = (e) =>{
            this.setState({phone:''})
        }
        handlerClick5 = (e) =>{
            this.setState({email: ''})
        }
        handlerClick6 = (e) =>{
            this.setState(alert('ish bitdi'))
        }
       
    render () {
        console.log(this.state)
        return(
            <div className ="Photoo6">
      
            <label htmlFor = ""> Name: 
            <input type="text" value={this.state.name} id="name" name="name"onChange={this.handleName} /><button type='button' className='btn' onClick={this.handlerClick1}>X</button></label><br></br>
            <label htmlFor = ""> Surname: 
            <input type="text" value={this.state.surname} id="surname" name="surname"onChange={this.handleSurname} /><button type='button' className='btn' onClick={this.handlerClick2}>X</button></label><br></br>
            <label htmlFor = ""> Fname: 
            <input type="text" value={this.state.fname} id="fname" name="fname"onChange={this.handleFname} /><button type='button' className='btn' onClick={this.handlerClick3}>X</button></label><br></br>
            <label htmlFor = ""> phone: 
            <input type="number" value={this.state.phone} id="phone" name="phone"onChange={this.handlePhone} /><button type='button' className='btn' onClick={this.handlerClick4}>X</button></label><br></br>
            <label htmlFor = "">Email:
            <input type="text" id="email" value={this.state.email} name="email"onChange={this.handleEmail} /><button type='button' className='btn' onClick={this.handlerClick5}>X</button></label><br></br>
            
     <form>
      <button type="submit"className='btn' onClick={this.handlerClick6}>Submit</button>
     </form>
           
    </div>
            
        )
    }
     
}
export default Photoo6