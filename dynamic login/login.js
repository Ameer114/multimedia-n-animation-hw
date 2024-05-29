
const database=[];
function check()
{
    var name=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    //var mess=document.getElementById("message");
    
    if(name===n && pass===p)
        {   alert("Login Successful");
            //mess.textContent="Login Successful";

            
            return false;
        }
    else{
        alert("Login Failed");
        //mess.textContent="wrong name or password";
        return false;
    }
}
function reg()
{       var name=document.getElementById("name").value;
        var pass=document.getElementById("pass").value;
        var c_pass=document.getElementById("con_pass").value;
        if(pass!==c_pass)
            {
                alert("confirm both password are same");
            }
            else{
            database.push({name:pass})
            }
}