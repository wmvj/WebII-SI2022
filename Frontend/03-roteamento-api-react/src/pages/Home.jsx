import {useEffect, useState} from 'react'
import { api } from '../api'
import {listPhotos} from '../components/listPhotoItem'

export const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {}, [])

    const loadPhotos = async () => {
        const photos = await api.getList()
        setList(photos)
    }

    return(
        <div>
            {list.map9((item, index)=>(
               <listPhotos>

               </listPhotos> 
            ))}
        </div>
    )
}