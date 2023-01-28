import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Table(props) {

    const [data, setData] = useState([])

    const deleteData = (data) => {
        // props.A.splice(index,1)
        // props.sA([...props.A])
        axios.delete(`https://redux-crud-38266-default-rtdb.firebaseio.com/form.json/${data}`)
    }

    const editData = (index) => {
        props.sV(props.A[index])
        props.sSB(false)
        props.sU(index)
    }

    useEffect(() => {
        axios.get('https://redux-crud-38266-default-rtdb.firebaseio.com/form.json')
        .then(function (response) {
            console.log(Object.keys(response.data).map(e=>response.data[e]));
            setData(Object.keys(response.data).map(e=>response.data[e]))
        }) 
        .catch(function (error) {
            console.log(error);
        });
    }, [])

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
                {data.map(
                    (data) => {
                        return(
                            <tr key={data}>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.profession}</td>
                                <td>{data.mobile}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td><button onClick={()=> editData(data)}>EDIT</button></td>
                                <td><button onClick={()=> deleteData(data)}>DELETE</button></td>
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