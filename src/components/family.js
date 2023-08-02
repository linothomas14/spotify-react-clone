import React from 'react'

const familyMember = [{
    id: 1,
    name: "Daddy",
    gender: "male",
},
{
    id: 2,
    name: "Super Mother",
    gender: "female",
},
{
    id: 3,
    name: "Big sistah",
    gender: "female",
},
{
    id: 4,
    name: "Yulyano Thomas Djaya",
    gender: "male",
},

{
    id: 5,
    name: "Lil sistah",
    gender: "female",
}]


const FamilyList = () => {
    const list = familyMember.map(member => {
        if (member.gender === "male") {
            return <li key={member.id} className="text-blue-500">Name : {member.name}</li>
        } else if (member.gender === "female") {
            return <li key={member.id} className="text-red-400">Name : {member.name}</li>
        }
        return <li key={member.id} className="text-gray-700">Name : {member.name}</li>
    })
    return (
        <ul>{list}</ul>
    )
}

export default FamilyList