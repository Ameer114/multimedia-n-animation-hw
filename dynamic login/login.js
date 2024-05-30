
const database={};
function check()
{
    var name=document.getElementById("username").value;
    var pass=document.getElementById("password").value.trim();
    var mess=document.getElementById("message");
    //var n="abc";
    //var p="123";
    if(name in database)
        {  if(database[name]===pass)
            {
            // alert("Login Successful");
            mess.textContent="Login Successful";
            return false;
            }

        }
    else{
        //alert("Login Failed");
        mess.textContent="wrong name or password";
        console.log(database);
        return false;
    }
}
function reg()
{     
    var name=document.getElementById("name").value;
        var pass=document.getElementById("pass").value.trim();
        var c_pass=document.getElementById("con_pass").value.trim();
        if(pass!==c_pass)
            {
                alert("Both passwords are not correct!");
                document.getElementById('pass').value = '';
                document.getElementById('con_pass').value = '';
               
                return false;
            }
            else{
                
            database[name]=pass;
            console.log(database);
            return false;
            //alert("Registration Successful");
            }

}