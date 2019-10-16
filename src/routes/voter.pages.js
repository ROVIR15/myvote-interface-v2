import VoterDashboard from '../views/voter.main'
import Ballot from '../views/voter.voting'
import Success from '../views/voter.success.vote'

export const routes = [{
    path: '/dashboard/voter/main',
    component: VoterDashboard
}, {
    path: '/dashboard/voter/vote',
    component: Ballot
}, {
    path: '/dashboard/voter/success-vote',
    component: Success
}, {
    redirect: true, 
    to: '/dashboard/voter/main'
}]