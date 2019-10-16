import React, {createContext} from 'react';

export const mainState = {
    form : {
        register: {
            nama_institusi: "",
            nik: "",
            nama_penyelenggara: "",
            jabatan: "",
            alamat: "",
            nama_kegiatan: "",
            deskripsi_kegiatan: ""
        },
        login: {
            username: "",
            password: "",        
        }
    },
    status: {
        signedUp: false,
        loggedIn : false,
        roles: ""
    },
    newUser: {
        username: "",
        password: ""
    },
    temp: {
        list: {
            candidate: [],
            voter: []
        }
    },
    sending: false
}

export const candidateState = {
    form : {
        no_urut: 0,
        nik: "",
        jenis_kelamin: "",
        nama_kandidat: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        alamat: "",
        provinsi: "",
        kota: "",
        visi: "",
        misi: ""
    },
    list: [],
    isLocked: "",
}

export const voterFState = {
    form: {
        nik: "",
        nama_pemilih: "",
        jenis_kelamin: "",
        email: "",
        alamat: ""
    },
    list: []
}

export const electionState = {
    doc: {
        contract_address: "",
        transaction_hash: "",
        transaction_list: []
    },
    election: {
        id: "",
        name: "",
        date_reg: "",
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
    administrator: {
        id: "",
        name: ""
    },
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
}

export const voterState = {
    info: {
        uid: "",
        username: "",
        name: "",
        token: "",
        account: "", //account_address
        voted: false,
        authenticated: false
    },
    election: {
        id: "",
        candidate_list: [],
        transaction_list: [],
        start: new Date(),
        end: new Date("2020-02-20"),
        name: ""
    },
    vote: 0
}

export const MainCtx = React.createContext(null);
export const ElectionCtx = React.createContext(null);
export const VoterCtx = createContext(null);