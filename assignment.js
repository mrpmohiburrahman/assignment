// https://github.com/mrpmohiburrahman/assignment

function kilometerToMeter(kilometer){
    if (typeof kilometer === "undefined" ) return "Please give a value of kilometer"
    else if (typeof kilometer === "number" ){
        if(kilometer<0) return "Tha value of Kilometer can't be minus value"  
        return kilometer*1000
    }
    else if (typeof kilometer === "string" ) return "The value of kilometer can't be a string"
    else if (typeof kilometer === "boolean" ) return "The value of kilometer can't be a boolean"
    else if (typeof kilometer === "object" ) return "The value of kilometer can't be a object"
    else return "The value of kilometer must be a number"
}


function budgetCalculator(watch,phone,laptop){
    if (typeof watch === "number" && typeof phone === "number" && typeof laptop === "number"){
        if (watch<0 || phone<0 || laptop<0) return "The number of watch or phone or laptop can't be minus."
        return ((watch*50)+(phone*100)+(laptop*500))
    }
    else if (typeof watch === "undefined" || typeof phone === "undefined" || typeof laptop === "undefined"){
        return "Please give value to all the the elements(ie. watch, phone, laptop)"
    }
    else if (typeof watch !== "number" || typeof watch !== "number" || typeof watch !== "number"){
        return "The value to all the the elements(ie. watch, phone, laptop) must be number"
    }
}


function hotelCost(days){
    if (typeof days === "undefined" ) return "Please give a value of days"
    else if (typeof days === "number" ){
        if(days>20)  return (10*100)+(10*80)+((days-20)*50)
        else if(days>10) return ((10*100)+(days-10)*80)
        else if(days>0) return (days*100)
        else return 0
    }
    else if (typeof days === "string" ) return "The value of days can't be a string"
    else if (typeof days === "boolean" ) return "The value of days can't be a boolean"
    else if (typeof days === "object" ) return "The value of days can't be a object"
    else return "The value of days must be a number"
}



function megaFriend(friendList){
    if(friendList === undefined || friendList.length<=0) return 'Please give a array of friends name'
    else if(Array.isArray(friendList)){
        let biggestName='';
        for(i=0;i<friendList.length;i++){
            if(typeof friendList[i] !== "string") return "Array contains elements other thatn strings that may not a name of friends"
            else if(biggestName.length<friendList[i].length) biggestName=friendList[i]
        }
        return biggestName
    }
    else return 'Please give a array of friends name'   
}
