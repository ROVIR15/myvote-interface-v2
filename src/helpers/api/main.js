import axios from "axios";
import { callbackify } from "util";

const urlAPI = 'http://localhost:5000/user/';

const headers = {"ContentType" : "application/json"}

const main = {
    postLogin(data, cb){
        // const res = axios.post(urlAPI + '/login', {data}, {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to logged in");
        //     return res.data;
        // });
        const res = {success: true}
        cb(res);
    },

    logout (token, cb) {
        const res = axios.delete(urlAPI + '/logout', {
          headers : { xauth : token}
        }).then(function(res){
          if(res.status === 401) return new Error("Failed to logout");
          return res.data
        })

        cb(res);
    },

    register(data, cb){
        // const res = axios.post(urlAPI + '/register', {data}, {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to register a new account");
        //     return res.data
        // })
        const res = {success: true, data : {username: "048084312", password: "123214"}}
        cb(res)
    },

    checkRoles(data, cb){
        console.log(data)
        const res = {loggedIn:true, roles: "voter"}
        cb(res)
    }
}

export default main;