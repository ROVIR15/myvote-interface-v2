import AdminMain from '../views/admin.main';
import AdminMenu from '../views/admin.dashboard.menu';
import AdminInsertVoter from '../views/admin.pemilih.stepper';
import AdminInsertCandidate from '../views/admin.kandidat.stepper';
import AdminWelcome from '../views/admin.first.setup';
import ListKandidat from '../views/admin.candidate.list';
import ListPemilih from '../views/admin.voter.list'
import ListTransaksi from '../views/admin.list.transaction'
// import VoterList from '../views/admin.dashboard.menu';
// import AdminMain from '../views/admin.dashboard.menu';

export const routes = [{
    path: '/dashboard/admin/main',
    component: AdminMain
}, {
    path: '/dashboard/admin/menu',
    component: AdminMenu
}, {
    path: '/dashboard/admin/insert-voter',
    component: AdminInsertVoter
}, {
    path: '/dashboard/admin/insert-candidate',
    component: AdminInsertCandidate
}, {
    path: '/dashboard/admin/welcome',
    component: AdminWelcome
}, {
    path: '/dashboard/admin/tabel-kandidat',
    component: ListKandidat
}, {
    path: '/dashboard/admin/tabel-pemilih',
    component: ListPemilih
}, {
    path: '/dashboard/admin/transaksi',
    component: ListTransaksi
}, {
    redirect: 'true',
    from: '/dashboard/admin',
    to: '/dashboard/admin/welcome'
}]
// , {
//     path: '/admin/voter-list',
//     component: VoterList
// }, {
//     path: '/admin/candidate-list',
//     component: CandidateList
// }, {
//     path: '/admin/transaction-explorer',
//     component: TransactionList
// },
