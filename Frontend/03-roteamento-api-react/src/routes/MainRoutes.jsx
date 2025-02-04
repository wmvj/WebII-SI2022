import {useRoutes} from 'react-router-dom'

import {Home} from '../pages/Home'
import {Photo} from '../pages/Photo'

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/photo', element: <Photo/>}
    ])
}