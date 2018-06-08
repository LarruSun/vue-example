import qriously from '@/components/ewm/qriously'
import vueqr from '@/components/ewm/vueqr'

export default[
    {
        path:'/',
        redirect:'qriously'
    },
    {
        path:'qriously',
        name:'qriously',
        component:qriously
    },
    {
        path:'vueqr',
        name:'vueqr',
        component:vueqr
    },

]