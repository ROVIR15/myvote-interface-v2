import React from 'react';
import { Grid} from '@material-ui/core'
import Box7 from '../components/admin.navbar.js'
import MaterialTable from 'material-table';

import {useElectionState} from '../reducers'

function App() {
  const [state, dispatch] = useElectionState()
  const {transaction_list} = state.doc;

  return (
        <Grid container direction="column" justify="center" alignItems="center" style={{width: '80%', padding: '0 1em', height: '667px', overflowY: 'auto', display: 'block', background: 'rgb(230,230,230)'}}>
          <Box7 />
          <Grid item style={{margin: '4em 0'}}>
            <Grid item>
            <MaterialTable
              title="Transaksi"
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
              
              style={{borderRadius: '20px', overflowX: 'auto', position: 'unset'}}
            />

            </Grid>
          </Grid>
        </Grid>
  );
}

export default App;
