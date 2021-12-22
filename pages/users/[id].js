//import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import styles from '../../styles/user.module.scss'
import Link from "next/link";
import MainContainer from "../../components/MainContainer";
//import { exit } from 'process';

const Users = ({ users }) => {
    const { query } = useRouter();
    if (query.id != "bootstrap.min.css") {
        let maxx = Number.parseInt(query.id);// query.id;
        let maxx2 = maxx + 10;//query.id + 10;
        let minn = '';
        if (maxx > 10) { minn = maxx - 10; }


        console.log('Start=' + maxx + ' Max=' + maxx2); //query.id = /page/id
        let itemz = [];//зададим масив
        let item2 = [];
        for (let i = maxx; i < maxx2; i++) {
            itemz.push(users[i]);
            item2.push(i - maxx);
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
                            <Link href={`/user/${item + maxx}`}>
                                <a>{itemz[item].name + " - " + itemz[item].country}<img src={itemz[item].logo} /></a>

                            </Link>
                        </li>
                    )}

                </ul>
                <a role="button" href={`/users/${minn}`} class="btn btn-success btn-lg" >Предыдущие 10</a>
                <a role="button" href={`/users/${maxx2}`} class="btn btn-danger btn-lg" >Следующие 10</a>
            </MainContainer >


        );
    }
};

//console.log("usersType=" + typeof users);
export default Users;

/*export async function getStaticProps(context) {
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
}*/

export async function getServerSideProps({ params }) {

    //if (params.id != "bootstrap.min.css") {
    //console.log('testVALUE=' + params.id + ", type=" + typeof params.id); //params.id = /page/id
    let fs = require('fs');
    let data = fs.readFileSync('pages/data.json', 'utf8');
    let users = JSON.parse(data);

    //}
    return {

        props: { users },

    }
}