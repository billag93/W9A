var age = 17;
var is_subscribed = false;

if((age < 18) && (is_subscribed == false)){
    console.log('The user is under 18 and not subscribed');
}
else if((age >= 18) && (is_subscribed == false)){
    console.log('The user is 18 and older and not subscribed');
}
else if((age < 18) && (is_subscribed == true)){
    console.log('The user is younger than 18 and is subscribed');
}
else if((age >= 18) && (is_subscribed == true)) {
    console.log('The user is 18 and older and is subscribed');
}

else{
    console.log('error in the code')
}
    
