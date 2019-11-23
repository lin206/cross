import React from 'react'

const qizistyle={
  background: "#fff",
  border: "1px solid #999",
  float: "left",
  fontSize: "30px",
  fontWeight: "bold",
  lineHeight: "50px",
  height: "50px",
  marginRight: "-1px",
  marginTop: "-1px",
  padding: 0,
  textAlign: "center",
  width: "50px",
}
class Qizi extends React.Component{
       render(){
          return (
            <button type="button" style={qizistyle} onClick={this.props.Click}>
              {this.props.value}
            </button>
)
          
       }
   }
   export default Qizi