

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'

const ApiCallUsingUseHookEffect = () => {

    const [postData,setPostData] = useState([]);

    useEffect(()=>{

        const getPostData = async ()=>{
         try{
    
            const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPostData(postResponse.data);
    
          }catch(error){
            console.log(error)
          }
      }
    
        getPostData()
    
    },[])
    
      return (
        <>
        <div className="container">
        <h3>  Calling API Using useEffect Hook</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
          {postData?.map((userData) => (
    
                <tr key={userData.id}>
                    <td> {userData.userId} </td>
                    <td> {userData.title} </td>
                    <td> {userData.body} </td>
                </tr>    
            ))}
            
          </tbody>
        </Table>
        </div>
              
        </>
      )

    

  
}

export default ApiCallUsingUseHookEffect
