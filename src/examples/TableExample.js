import React from 'react';
import { Container, Grid, Button, Paper, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import MaterialTable, { MTableToolbar, MTableActions } from 'material-table';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#E6E6E6',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    paddingLeft: '0',
    paddingRight: '0'
  },
  box3: {
    background: 'rgb(255,255,255)',
    height: 'auto',
    width: "100%",
    margin: '0.5em',
    padding: '0.5em 1.5em',
    borderRadius: "20px"
  },
}))

function App() {

    const classes = useStyles();

    return (
      <Container maxWidth="xl" className={classes.root} p={0} m={0}>
        <Grid item direction="row" style={{display: 'flex'}}>
            <MaterialTable
              title="Basic Search Preview"
              columns={[
                { title: 'Hash Transaksi', field: 'txHash' },
                { title: 'Waktu', field: 'timestamp' },
                { title: 'Nomor Blok', field: 'blockNumber', type: 'numeric' },
                { title: 'Dari', field: 'from'},
                { title: 'Ke', field: 'to'},
                { title: 'Nilai', field: 'value', type: 'numeric' }              ]}
              data={
                [{txHash : "0x41f382a210be13c5bfcecce5f46da4dd4eb20cd3cec10319b427c76e1bbd91bf",
                  blockNumber: "4971628",
                  timestamp : "4 mins ago",
                  from : "0xd883af6d47d0a780d050b5938baac0384e78ddc4",
                  to : "0xd1c53e2d39aa0d94e1738c926d439002c2016fb0",
                  value : 0.00003265},
                  {txHash : "0xc0c1504d0521a71af9c751f9e92a8d59b3b785d6483becbdb9a7ac917dc791ac",
                  blockNumber: "4971628",
                  timestamp : "4 mins ago",
                  from : "0x0cb510e2f16c36ce039ee3164330d5f00ecf9eac",
                  to : "0x4eac9a8c7a6c3a869cdbff4e06cb552148749206",
                  value: 0.000021},
                  {txHash : "0xedb24c1e9c35a9a1b85c69e488b8e7766c18d63eff0157b7f31e5e8bc0a94aa4",
                  lockNumber: "4971627",
                  timestamp : "4 mins ago",
                  from : "0xf402704d3b6c98850a6a47365cb99ec930f8b819",
                  to : "0x01ee1eb27ee8b9438e887dfe8750b12b5ce874d0",
                  value : 0.00028225},
                  {txHash : "0xa5f90f7f3ab4b112dc620c59d8e19da8f2e305d1d384a2564fc46892ede82439",
                  blockNumber: "4971627",
                  timestamp : "4 mins ago",
                  from : "0xb22b525ea688e35a444909e31df49d6e709cc587",
                  to : "0x037df56c1f374bd7b6fd0ecf866713031072ddb7",
                  value : 0.0000271},
                  {txHash : "0x34eeb4b4f89391c0ac38125f1bc80d1b9dec8c648519ce330524d52a77887fd0",
                  blockNumber: "4971626",
                  timestamp : "4 mins ago",
                  from : "0xfeab307b47d72df60b18901aca48112e7ae0ea44",
                  to : "0x58769647fdfca2ca1483745bf1b3140e897bcf37",
                  value : 0.00028551},
                  {txHash : "0xb5eba4fa60dfe6831c6c76f2929ce2bab8ad8077e06fb172563d2c649bfaede2",
                  blockNumber: "4971626",
                  timestamp : "4 mins ago",
                  from : "0x08c31473a219f22922f47f001611d8bac62fbb6d",
                  to : "0xd1c53e2d39aa0d94e1738c926d439002c2016fb0",
                  value : 0.00003265},
                  {txHash : "0xfc147dfc2087fe05e8f400894ca95b21901540bf6ce79de3ff1ef272f1ca8526",
                  blockNumber: "4971626",
                  timestamp : "4 mins ago",
                  from : "0x9d40c3d04a25f52176a445e13835652af61f7983",
                  to : "0x86e534ac872905b3b9957e32b6f229a57bc79af2",
                  value : 0.00004564},
                  {txHash : "0x96f644afe8279b40830386b0f5f9884427c53c9eb317c38431d77f361ccd69c4",
                  blockNumber: "4971625",
                  timestamp : "4 mins ago",
                  from : "0xfeab307b47d72df60b18901aca48112e7ae0ea44",
                  to : "0xeeebd4f329ee33089ab7cfc3c495f31f0570a393",
                  value : 0}]
              }        
              options={{
                search: false
              }}

              components={{
                Toolbar: props => (
                  <Grid item direction="row" style={{display: 'block'}}>
                    <MTableToolbar {...props} />
                    <div style={{textAlign: "right"}}>
                      <Button style={{margin: '0 1em', background: 'green', color: '#fff'}}> LANJUTKAN </Button>
                      <Button style={{margin: '0 1em', color: '#666'}} variant="inherit"> KEMBALI </Button>
                    </div>
                  </Grid>
                )
              }}

              style={{borderRadius: '20px', margin: '0.5em', overflowX: 'auto'}}
            />
        </Grid>
        <Grid item direction="row" style={{display: 'flex'}}>
            <MaterialTable
              title="Basic Search Preview"
              columns={[
                { title: 'ID Pemilih', field: 'id_pemilih' },
                { title: 'Nama', field: 'nama' },
                { title: 'Jenis Kelamin', field: 'jenis_kelamin', type: 'numeric' },
                { title: 'Email', field: 'email'},
                { title: 'Alamat', field: 'alamat'}
              ]}
              data={
                [{id_pemilih : "33193790067",
                  nama: "Rizky Anti",
                  timestamp : "4 mins ago",
                  jenis_kelamin : "Laki-laki",
                  email : "rizkyanto@gmail.com",
                  alamat : "Jalan Agus Winarno no. 128 Kec. Mejobo"},
                  {id_pemilih : "33193790067",
                  nama: "Rizky Anti",
                  timestamp : "4 mins ago",
                  jenis_kelamin : "Laki-laki",
                  email : "rizkyanto@gmail.com",
                  alamat : "Jalan Agus Winarno no. 128 Kec. Mejobo"},
                  {id_pemilih : "33193790067",
                  nama: "Rizky Anti",
                  timestamp : "4 mins ago",
                  jenis_kelamin : "Laki-laki",
                  email : "rizkyanto@gmail.com",
                  alamat : "Jalan Agus Winarno no. 128 Kec. Mejobo"},
                  {id_pemilih : "33193790067",
                  nama: "Rizky Anti",
                  timestamp : "4 mins ago",
                  jenis_kelamin : "Laki-laki",
                  email : "rizkyanto@gmail.com",
                  alamat : "Jalan Agus Winarno no. 128 Kec. Mejobo"},
                ]}        
              options={{
                search: false
              }}

              components={{
                Toolbar: props => (
                  <Grid item direction="row" style={{display: 'block'}}>
                    <MTableToolbar {...props} />
                    <div style={{textAlign: "right"}}>
                      <Button size="medium" style={{margin: '0 1em', background: 'green', color: '#fff', borderRadius: '20px'}}> LANJUTKAN </Button>
                      <Button size="medium" style={{margin: '0 1em', color: '#666', borderRadius: '20px'}} variant="inherit"> KEMBALI </Button>
                    </div>
                  </Grid>
                )
              }}

              style={{borderRadius: '20px', margin: '0.5em', overflowX: 'auto'}}
            />
        </Grid>
        <MaterialTable
              title="Basic Search Preview"
              columns={[
                { title: 'No Urut', field: 'no_urut' },
                { title: 'Nama', field: 'nama' },
                { title: 'Jenis Kelamin', field: 'jenis_kelamin', type: 'numeric' },
                { title: 'Email', field: 'email'},
                { title: 'Alamat', field: 'alamat'},
                { title: 'Visi dan Misi', field: 'visi_misi'}
              ]}
              data={
                [{no_urut : "1",
                  nama: "Rizky",
                  jenis_kelamin : "Laki-laki",
                  email : "rizky@gmail.com",
                  alamat : "Jalan Agus Winarno no. 128 Kec. Mejobo",
                  visi_misi: '1. Mojo Mojo'},
                  {no_urut : "2",
                  nama: "Lokal",
                  jenis_kelamin : "Laki-laki",
                  email : "lokal@gmail.com",
                  alamat : "Jalan Agus Winarno no. 128 Kec. Mejobo",
                  visi_misi: '1. Mojo Mojo'},
                ]}        
              options={{
                search: false
              }}

              components={{
                Toolbar: props => (
                  <Grid item direction="row" style={{display: 'block'}}>
                    <MTableToolbar {...props} />
                    <div style={{textAlign: "right"}}>
                      <Button size="medium" style={{margin: '0 1em', background: 'rgba(21,204,113,1)', width: "10em", color: '#fff', borderRadius: '20px'}}> LANJUTKAN </Button>
                      <Button size="medium" style={{margin: '0 1em', color: '#666', width: "10em", borderRadius: '20px'}} variant="inherit"> KEMBALI </Button>
                    </div>
                  </Grid>
                )
              }}

              style={{borderRadius: '20px', margin: '0.5em', overflowX: 'auto'}}
            />
        </Grid>

      </ Container>
    );
}

export default App;
