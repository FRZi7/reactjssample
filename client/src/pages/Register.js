import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';


function Register() {
  return (
    <div className='authentication'>
        <div className='authentication-form card p-3'>
            <div className='card-title'> 
                <h1>nice to meet you</h1>
                <Form layout =  "vertical">
                    <Form.Item label = "Name:" name = "name">
                        <Input placeholder="name"/>
                    </Form.Item>
                    <Form.Item label = "Email:" name = "email">
                        <Input placeholder="enter your email"/>
                    </Form.Item>
                    <Form.Item label = "Password:" name = "paswword">
                        <Input placeholder="Enter password"/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Register