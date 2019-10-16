import axios from "axios";

const urlAPI = 'http://localhost:5000/dashboard/voter/';

const headers = {"ContentType" : "application/json"}

const voter = {
    getVoterData(id_kegiatan, info){
        const res = {success: true, data: { 
            info: {
                uid: "545erewrq",
                username: "localhost",
                token: "ja;fj3w421904hwkeqe12",
                account: "0x2173814123412wqeq",
                voted: false,
                authenticated: false,
                transaction_hash: "0x789273192"
            },
            election: {
                id: "2412313",
                candidate_list: [
                    {no_urut: 1, name: "Eko"},
                    {no_urut: 2, name: "Ari"},
                    {no_urut: 3, name: "anto"}        
                ],
                transaction_list: [],
                start: new Date(),
                end: new Date("2020-02-20"),
                name: ""
            },
            vote: 0      
        }}
        return res;
        // return axios.get(urlAPI + id_kegiatan, {info}, {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to get voter information");
        //     return res.data;
        // }) 
    },

    postVoterData(id_kegiatan, info, cb){
        const res = {success: true, transactionHash: "0x893123h1ih4122193"}
        // return axios.post(urlAPI + id_kegiatan, {info}, {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to post your vote");
        //     return res.data;
        // })
        cb(res)
    },

    checkStatus(id_kegiatan, data){
        const {label, info} = data;
        switch(label){
            case "voter":
                return axios.get(urlAPI+ id_kegiatan + "/status-voter", {info}, {headers}).then(function(res){
                    if(res.status === 401) return new Error("Failed to get status of voters data");
                    return res.data;
                });
                break;
            case "candidate":
                return axios.get(urlAPI + id_kegiatan + "/status-candidate", {info}, {headers}).then(function(res){
                    if(res.status === 401) return new Error("Failed to get status of candidates data");
                    return res.data;
                })
                break;
            case "election":
                return axios.get(urlAPI + id_kegiatan + "/election-status", {info}, {headers}).then(function(res){
                    if(res.status === 401) return new Error("Failed to get status of an election");
                    return res.data;
                })
                break;
            default: 
                return new Error("Please defined label");
        }
    }
}

export default voter;