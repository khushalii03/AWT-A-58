function checkProgress(){ 

let name=document.getElementById("name").value.trim(); 

let roll=document.getElementById("roll").value.trim(); 

let topics=parseInt(document.getElementById("topics").value); 

let hours=parseInt(document.getElementById("hours").value); 

let rating=parseInt(document.getElementById("rating").value); 

If(name==""||roll==""||isNaN(topics)||isNaN(hours)||isNaN(rating)); { 

Alert("All fields are mandatory"); 

Return; 

} 

let lastDigit=parseInt(roll.charAt(roll.length-1)); 

if(lastDigit%2==0); { 
if (rating < 5) {
    alert("Confidence Rating should be at least 5");
    return;
} else {
    if (hours < 5) {
        alert("Practice Hours should be at least 5");
        return;
    }
}

let category=getCategory(topics,hours,rating); 

Document.getElementById("result").innerHTML=category; 

let jsTopics=["Variables","Functions","DOM Manipulation"]; 

let output=""; 

jsTopics.forEach(function(item){ 

output+="<li>"+item+"</li>"; 

}); 

Document.getElementById("jsTopics").innerHTML=output; 

} 

function getCategory(topics, hours, rating) {
    if (topics >= 10 && hours >= 20 && rating >= 8) {
        return "Excellent Progress";
    } else if (topics >= 5 && hours >= 10 && rating >= 5) {
        return "Good Progress";
    } else {
        return "Needs Improvement";
    }
}
}