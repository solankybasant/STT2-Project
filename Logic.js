// Ṣtatic logic

user=["u1","u2","u3"]
given_by="u4"
amount_paid=500;
const average = (amount_paid / user.length).toFixed(2);
console.log(average); 

let i;
bill=[]
for(i=0;i<user.length;i++)
{
    if(user[i]!=given_by)
    {
        bill.push(`${user[i]} will pay ${average} to ${given_by}`)
    }
}

// console.log(bill);

// --------------------------------------------------------------------------------------------

group=[
    {
        person:"u1",
        amount: 200
    },
    {
        person:"u2",
        amount: 300
    },
    {
        person:"u3",
        amount: 500
    },
    {
        person:"u4",
        amount: 600
    }
]

pay_me=[]
g="u6"
for(i=0;i<group.length;i++)
{
    if(group[i].person!=g)
    {
        pay_me.push(`${group[i].person} will pay ${group[i].amount} to ${g}`)
    }
}
console.log(pay_me);
