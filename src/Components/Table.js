import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_BY_ID, GET_USER } from '../Redux/Sagas/types'
import { setUserSlice } from '../Redux/Slice/User'
function Table(props) {
    
    const rows = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: GET_USER})
    }, [dispatch])
    

  return (
    <div>
        <table border={2} align={'center'}>
            <tbody>
                <tr>
                    <td>FIRST NAME</td>
                    <td>LAST NAME</td>
                    <td>PROFESSION</td>
                    <td>MOBILE NO</td>
                    <td>E-MAIL ID</td>
                    <td>ADDRESS</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
                {rows.map(
                    (data, index) => {
                        return(
                            <tr key={index}>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.profession}</td>
                                <td>{data.mobile}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td><button onClick={()=> dispatch(setUserSlice(data))}>EDIT</button></td>
                                <td><button onClick={()=> dispatch({type: DELETE_USER_BY_ID, id: data.id})}>DELETE</button></td>
                                </tr>
                            )
                    }
                )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table