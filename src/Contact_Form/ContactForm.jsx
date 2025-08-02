import Form from 'react-bootstrap/Form';
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button,Alert} from 'react-bootstrap';
import {useState} from "react";



export const ContactForm= () =>{

    const schema = yup.object().shape({
        fullName: yup.string().required("Required"),
        email: yup.string().email("Invalid Email").required("Required"),
        phone: yup.string().required("Required").matches(/^\d{10}$/,"Invalid Number"),
        message: yup.string().required('Message is required')
    })
 const {register, handleSubmit, reset, formState:{errors}} = useForm({resolver:yupResolver(schema)});

    const [successMessage, setSuccessMessage] = useState("");


    const onSubmit = (data) => {
       
        console.log(data);
        setSuccessMessage("Submitted Successfully");
        reset();
        setTimeout(()=>setSuccessMessage(""),5000);
    };
   return (
    <div className="container my-4 d-flex justify-content-center">
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center mb-4">Contact Us</h2>

        {successMessage && <Alert variant="success">Form submitted successfully!</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control {...register('fullName')} placeholder="Enter your name" />
            {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register('email')} placeholder="Enter your email" />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control {...register('phone')} placeholder="10-digit phone number" />
            {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} {...register('message')} placeholder="Your message" />
            {errors.message && <p className="text-danger">{errors.message.message}</p>}
          </Form.Group>

          <Button type="submit" variant="primary" className="w-40">Submit</Button>
        </Form>
      </div>
    </div>
  );
};
