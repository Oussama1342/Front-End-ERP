import React from 'react' ; 
import '../../style.css';
 

const Header=()=>{
    
    return (

      <html>
      <body>
  
  <div class="container">
      <div class="row">
          <div class="col-md-offset-5 col-md-4 text-center">
                <div class="form-login">
                  <h1> Login</h1> < br></br>   
                  
                  <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="username"/> < br></br> < br></br>
                  <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password"/> < br></br>   < br></br>   
                  <div class="wrapper">
                          <span class="group-btn">
                              <a href="#" >login <i class="fa fa-sign-in"></i></a>
                          </span>
                  </div>
              </div>
          </div>
      </div>
     
      < br></br>   < br></br>   < br></br>   < br></br>   < br></br>   
      <div class="footer text-white text-center">
      </div>
    
  </div>
  </body>
  </html>
    )

 




}
export default Header 