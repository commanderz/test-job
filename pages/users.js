import { useState, useEffect } from 'react'
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({ users }) => {

    let itemz = [];//зададим масив
    let item2 = [];
    for (let i = 0; i < 10; i++) {
        itemz.push(users[i]);
        item2.push(i);

    }

    //let text2=
    //text2=text2+text;
    //text2=text2+ ${
    //{ for (let i = 0; i < 10; i++) 
    //<li key={itemz[i].id}> {itemz[i].name}  </li>;
    let i = 0;
    return (
        <MainContainer keywords={"users next js"}>
            <h1>Cписок пользователей</h1>
            <ul>
                {item2.map(item =>
                    <li key={item}>
                        <Link href={`/user/${item}`}>
                            <a>{itemz[item].name + " - " + itemz[item].country}<img src={itemz[item].logo} /></a>

                        </Link>
                    </li>
                )}
            </ul>

            <a role="button" href="/users/10" class="btn btn-primary btn-lg" >Следующие 10</a>
        </MainContainer>


    );
};

console.log("usersType=" + typeof users);
export default Users;

export async function getStaticProps(context) {
    //const response = await fetch(`http://localhost:3000/data.json`)
    //const response = await fetch(`c:\Users\admin007\next\myapp_v1\pages\data.json`);
    //const users = await response.json()
    let fs = require('fs');
    let data = fs.readFileSync('pages/data.json', 'utf8');
    let users = JSON.parse(data);
    //console.log(typeof users[2].logo);
    //console.log(json, 'the json obj');
    //let data = JSON.parse(jsontext);


    return {
        props: { users }, // will be passed to the page component as props
    }
}
