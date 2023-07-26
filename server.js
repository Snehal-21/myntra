function signup(event){
    event.preventDefault();

    var name=document.getElementById("mname").value;
    var email=document.getElementById("memail").value;
    var password=document.getElementById("mpass").value;
    var cpassword=document.getElementById("mconfirmpass").value;


    if(name && email && password && cpassword){
        if(password.length>=8 && password.length>=8){
            if(password==cpassword){
                var ls=JSON.parse(localStorage.getItem("myntrausers")) || [];
                var flag=false;
                for(var i=0;i<ls.length;i++){
                    if(ls[i].uemail==email){
                        flag=true;
                    }
                }
                if(flag==true){
                    alert("email already exist");
                }
                else{
                    var myntra={uname:name,uemail:email,upassword:password,ucpassword:cpassword};
                    ls.push(myntra);
                    localStorage.setItem("myntrausers",JSON.stringify(ls));
                    alert("sign up successfully");
                    document.getElementById("mname").value='';
                    document.getElementById("memail").value='';
                    document.getElementById("mpass").value='';
                    document.getElementById("mconfirmpass").value='';
                    window.location.href=`./login.html`
                }
            }
            else{
                console.log("Password not matched.")
            }
        }
        else{
            console.log("Password should be more than 8 digits.")
        }
    }
    else{
        console.log("all fields are required.");
    }
}

function login(event){
    // alert("working");
    event.preventDefault();

    var email=document.getElementById("lemail").value;
    var pass=document.getElementById("lpass").value;
    var myntralogin={};

    if(email && pass){
        var marray=JSON.parse(localStorage.getItem("myntrausers"));
        var flaglogin=false;
        console.log(marray);
        
        for(var i=0;i<marray.length;i++){
            console.log(marray[i]);
            
            if(marray[i].uemail===email || marray[i].upassword===pass){
                flaglogin=true;
                myntralogin=marray[i];
                console.log(myntralogin,"njknj");
                
            }
        }
        if(flaglogin==true){
            localStorage.setItem("mlogin",JSON.stringify(myntralogin));
            // alert("log in successfully");
            document.getElementById("lemail").value='';
            document.getElementById("lpass").value='';
            window.location.href="./home.html";
        }
    }
    else{
        console.log("both fields are required.")
    }
}
