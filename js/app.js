var age = [24, 36, 14, 18];
var is_subscribed = ['yes', 'no', 'no', 'yes'];

arraylength= age.length;
for(var counter=0; counter<arraylength; counter++){
    console.log(age[counter]);
}

arraylength= is_subscribed.length
for(var counter=0; counter<arraylength; counter++){
    console.log(is_subscribed[counter]);
}



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
