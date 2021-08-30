

const validName = name =>{
   if( !(/\d|\W/gm).test(name))return true;
   return false;
}

const validSurname = surname =>{
if((/(.{10,100})|(\d)|(\W)/).test(surname))return false;
return true
    
}

const validMail = mail =>{
 
    return (/^.+@.+\..+$/).test(mail)
    

}



const validPassword = pass => { 
   return (/.{6,16}$/).test(pass);
 
}



module.exports={validName,validPassword,validSurname,validMail}