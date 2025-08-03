import React from 'react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import { Button } from 'react-bootstrap';


export const AddressForm=()=>{
    const schema=yup.object().shape({
        Name: yup.string().required("Name is required"),
        email: yup.string().required("email is required").email("Invalid Email"),
        country:yup.string().required("country is required"),
        pincode:yup.string().required("Pincode is required").matches(/^\d{6}$/,"pincode must be 6 digit"),
    });

    const{register,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)})

    const onSubmit=(data)=>{
    console.log(data);
    alert("submitted successfully");
    reset();
    };

    const countries=["India","America","United korea","England"];
return(
    
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
    <div>
        <h4>Address Form </h4>
        <div className="mb-3 w-20">
        <label> Name</label>
        <input className="form-control" {...register("Name")} placeholder="Enter Your name"style={{width:"20%"}} />
        {errors.Name && <p>{errors.Name.message}</p>}
     </div>
     <div className="mb-3">
        <label>Email</label>
        <input className="form-control" {...register("email")} placeholder="Enter Your Email" style={{width:"20%"}}/>
        {errors.email && <p>{errors.email.message}</p>}
     </div>
     <div className="mb-3">
     <label>country</label>
     <select {...register("country")} className="form-control" style={{width:"20%"}}>
     <option value="">Select Your Country</option>
     {countries.map((value,index)=>(
     <option key={index} value={value}>{value}</option>
    ))}
    </select>
      {errors.country && <p className="text-danger">{errors.country.message}</p>}
    </div>
    <div className="mb-3">
        <label>Pincode</label>
        <input className="form-control" {...register("pincode")} placeholder="Enter 6-digit pincode"style={{width:"20%"}} />
        {errors.pincode && <p className="text-danger">{errors.pincode.message}</p>}
      </div>
     <Button type="submit" variant="primary" className="w-40">Submit</Button>
    </div>
    </form>
);
};