import axios from "axios";

const urlAPI = 'http://localhost:5000/dashboard/admin/';

const headers = {"ContentType" : "application/json"}

const admin = {
    /**
     * @description this API for getting data from database related the election
     * 
     * @param id_kegiatan election_id as main parameter 
     */
    getElectionInfo(id_kegiatan) {
         const res = {success: true, data: {
            doc: {
                contract_address: "",
                transaction_hash: "",
                transaction_list: []
            },
            election: {
                id: "7979707678",
                name: "Pemilihan Apa",
                date_reg: "01-09-2019",
                info: {
                    start_date: "",
                    start_time: "",
                    end_date: "",
                    end_time: ""
                },
                start: new Date(),
                end: new Date("2020-02-20"),
                active: true
            },
            id_administrator: "",
            candidate: {
                list: [],
                isLocked: "",
                lastStep: 0
            },
            voter : {
                list: [],
                isAuth: false,
                isLocked: false,
                lastStep: 0
            }
        }}
        //  return axios.get(urlAPI + id_kegiatan, {headers}).then(function(res){
        //      if(res.status === 404) return new Error("Nothing has found");
        //      else return res.data
        //  })
        return res;
    },
    
    sendElectionInfo(id_kegiatan, data){
        return axios.post(urlAPI + id_kegiatan, {data} , {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to send data");
            else return res.data
        })
    },

    updateElectionInfo(id_kegiatan, data, cb){
        const res = {success:true, message: data}
        // return axios.put(urlAPI + id_kegiatan, {data}, {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Had trouble when trying to update election");
        //     else return res.data;
        // })
        cb(res)
    },

    activateElection(id_kegiatan){
        return axios.post(urlAPI + id_kegiatan, {headers}).then(function(res){
            if(res.status ===  401 ) return new Error("Failed to update this election");
            return res.data;
        })
    },

    getCandidateData(id_kegiatan){
        return axios.get(urlAPI + id_kegiatan + "/candidate", {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to get data to server");
            return res.data
        })
    },

    getAllCandidateData(id_kegiatan){
        return axios.get(urlAPI + id_kegiatan + "/candidates", {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to get data to server");
            return res.data
        })
    },

    sendCandidateData(id_kegiatan, data, cb){
        const res = {success: true, candidates: data}
        // return axios.post(urlAPI + id_kegiatan + "/insert-candidate", {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to send data to server");
        //     return res.data
        // })
        cb(res);
    },

    deleteCandidateData(id_kegiatan, data){
        return axios.delete(urlAPI + id_kegiatan + "/delete-candidate", {data}, {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to delete candidate data");
            return res.data
        })
    },

    updateCandidateData(id_kegiatan, data){
        return axios.put(urlAPI + id_kegiatan + "/update-candidate", {data}, {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to update data candidate");
            return res.data
        })
    },

    createCandidate(id_kegiatan, cb){
        const res = {success: true}
        // return axios.post(urlAPI + id_kegiatan + "/create-candidate", {headers}).then(function(res){
        //     if(res.status === 401) new Error("Failed to create candidate");
        //     return res.data
        // })
        cb(res);
    },

    getVoterData(id_kegiatan){
        return axios.get(urlAPI + id_kegiatan + "/voter", {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to get candidate data to server");
            return res.data
        })
    },

    getAllVotersData(id_kegiatan){
        return axios.get(urlAPI + id_kegiatan + "/voters", {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to get candidates data to server");
            return res.data
        })
    },

    sendVoterData(id_kegiatan, data, cb){
        const res = {success: true, voters: data}
        // return axios.post(urlAPI + id_kegiatan + "/insert-voter", {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to send candidate data to server");
        //     return res.data
        // })
        cb(res)
    },

    deleteVoterData(id_kegiatan, data){
        return axios.delete(urlAPI + id_kegiatan + "/delete-voter", {data}, {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to delete candidate data");
            return res.data
        })
    },

    updateVoterData(id_kegiatan, data){
        return axios.put(urlAPI + id_kegiatan + "/update-voter", {data}, {headers}).then(function(res){
            if(res.status === 401) return new Error("Failed to update candidate data");
            return res.data
        })
    },

    createVoter(id_kegiatan, data, cb){
        const res = {success: true}
        // return axios.push(urlAPI + id_kegiatan + "/create-voter", {data}, {headers}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to create voter");
        //     return res.data
        // })
        cb(res)
    },

    authVoter(id_kegiatan, data, cb){
        const res = {success: true}
        cb(res)
        // return axios.push(urlAPI + id_kegiatan + "/auth-voter", {data}).then(function(res){
        //     if(res.status === 401) return new Error("Failed to do voter authorization");
        //     return res.data
        // })
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

export default admin;