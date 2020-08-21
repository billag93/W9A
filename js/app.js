var age = [24, 36, 14, 18];
var is_subscribed = [true, false, false,true];

arraylength= age.length;
for(var index=0; index<arraylength; index++){
    console.log(age[index]);
    if((age[index] < 18) && (is_subscribed[index] == false)){
        console.log('The user is under 18 and not subscribed');
    }
    else if((age[index] >= 18) && (is_subscribed[index] == false)){
        console.log('The user is 18 and older and not subscribed');
    }
    else if((age[index] < 18) && (is_subscribed[index] == true)){
        console.log('The user is younger than 18 and is subscribed');
    }
    else if((age[index] >= 18) && (is_subscribed[index] == true)) {
        console.log('The user is 18 and older and is subscribed');
    }
    
    else{
        console.log('error in the code')
    }
    
}

