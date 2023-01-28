import React from 'react'
import Table from './Table'
import Validation from './Validation'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../Redux/Slice/User'
import { CREATE_USER, UPDATE_USER_BY_ID } from '../Redux/Sagas/types'

function Form() {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const getValue = (e) => {
        dispatch(setUserSlice({
            ...user,
            [e.target.name] : e.target.value
        }))
    }

    const submitValues = (e) => {
        e.preventDefault()

        if(Validation(user)){
            dispatch(setUserSlice({
                firstname: '', lastname: '', profession: '', mobile: '', email: '', address: ''
            }))

            user.id === "" ? dispatch({type: CREATE_USER, user: {...user}}) : dispatch({type: UPDATE_USER_BY_ID, user})
        }
        
    }


  return (
    <React.Fragment>
        <div className='containor'>
            <form>
                <h1>FORM</h1><hr></hr>
                <div>
                <label>First Name:  </label>
                <input type='text' placeholder='Write Your First Name' name='firstname' value={user.firstname} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>Last Name:   </label>
                <input type='text' placeholder='Write Your Last Name' name='lastname' value={user.lastname} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>Profession:  </label>
                <select placeholder='Select Your Proffesion' name='profession' value={user.profession} onChange={getValue}>
                <option value=''></option>
                <option value='Developer'>Developer</option>
                <option value='Designer'>Designer</option>
                <option value='Project Manager'>Project Manager</option>
                <option value='Tester'>Tester</option>
                </select>
                </div>
                <br/>
                <div>
                <label>Mobile No:    </label>
                <input type='text' placeholder='Write Your Mobile No' name='mobile' value={user.mobile} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>E-mail ID:    </label>
                <input type='text' placeholder='Write Your E-mail ID' name='email' value={user.email} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>Address:     </label>
                <input type='text' placeholder='Write Your Address' name='address' value={user.address} onChange={getValue}/>
                </div>
                <br/>
                <div>
                    <button onClick={submitValues}>SUBMIT</button>
                </div>
                
            </form><hr/>
            <Table />
        </div>
    </React.Fragment>
  )
}

export default Form