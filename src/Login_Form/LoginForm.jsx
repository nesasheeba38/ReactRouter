import React from 'react';
import Form from 'react-bootstrap/Form'
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {Button} from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';


 export const LoginForm=()=>{

const schema= yup.object().shape({
    name:yup.string().required("name is required"),
    Email:yup.string().email("Invalid Email").required("Email is reqiured"),
    password:yup.string().min(6,"password should be 6 character").required("password is required"),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"pasword is reqiured").required("consfirm password is required")
});
   const{register,handleSubmit,formState:{errors},}=useForm({resolver:yupResolver(schema)});  


const onSubmit=(data)=>{
    console.log("submitted",data);
}

return(
    
   <div>
       <h1 className='my-2 text-center'>Simple Login Form</h1>
       <div className='container m-4 d-flex justify-content-center'style={{ width: '100%' }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
       <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Name: </Form.Label>
        <Form.Control placeholder="Enter Name" {...register('name')}/>
         {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Email : </Form.Label>
        <Form.Control placeholder="Enter email" {...register('Email')}/>
        {errors.Email && <p style={{color:"red",fontSize:"15px"}}>{errors.email.message}</p>}
      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label className='d-flex justify-content-start'>Password : </Form.Label>
        <Form.Control placeholder="Password" {...register('password')}  className="w-100"/>
        {errors.password && <p style={{color:"red",fontSize:"15px"}}>{errors.password.message}</p>}
      </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label className='d-flex justify-content-start'>Confirm Password : </Form.Label>
        <Form.Control placeholder="Password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p style={{color:"red",fontSize:"15px"}}>{errors.confirmPassword.message}</p>}
      </Form.Group>

      <Button variant="primary" type="submit">Register</Button>
      </Form>
        </div>
        </div>

    

);
    };
export default LoginForm;