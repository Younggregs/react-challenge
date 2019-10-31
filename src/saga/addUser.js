import Api from '../components/sub_components/Api'
import dataObject from './dataObject'

async function addUserData(buffer){


    try {
      const res = await fetch(Api, {
       
       method: 'POST',
       headers : {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify(dataObject()),
       

      })
      const userList = await res.json();

      return userList

    } catch (e) {
      console.log(e);
    }

    return null


  }


  export default addUserData