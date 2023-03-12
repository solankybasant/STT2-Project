user=[
    {
        name:"sakshi",
        amount:30
    },
    {
        name:"priya",
        amount:0
    },
    {
        name:"basant",
        amount: 600
    }
];
const sum = user.map(element => element.amount).reduce((a, b) => a + b, 0);
// console.log(sum); // 600 = 0 + 100 + 200 + 300

const average = (sum / user.length).toFixed(2);
console.log(average); 

var to_give=[]
var to_get=[]
user.map(item => {
    // console.log(item, index);
    if(average-item.amount>0) 
    {
        to_give.push( {name: item.name, pay: (average-item.amount).toFixed(2)});
    }
    else if( average-item.amount<0)
    {
        to_get.push( {name: item.name, pay: (item.amount-average).toFixed(2)});
    }
  });

function compareName(a, b) {
    return a.pay>b.pay    
}
to_give.sort(compareName);
to_get.sort(compareName);
// console.log(to_give)
// console.log(to_get) 



ans=[]
// `String text ${expression}`
while(to_give.length>0)
{
    let give=to_give[0].pay;
    let from=to_give[0].name;
    let get=to_get[0].pay;
    let to=to_get[0].name;
    // console.log(get);
    // console.log(give);
    ans.push(` ${from} will pay ${give} to ${to}` )
    if(give<get)
    {
        console.log("paying")
        to_give.shift();
        to_get[0].pay=to_get[0].pay-give;
    }
    else if(give==get)
    {
        console.log(give)
        to_give.shift();
        to_get.shift();       
    }
    else
    {
        to_get.shift();
        to_give[0].pay=to_give[0].pay-get;
    }
    
}
console.log(ans)
