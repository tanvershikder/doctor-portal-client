import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../Home/Shared/Loading'

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))


    const imagestorage_key = '8c9e657645bc7264c5c4e9c24848e699';


    const onSubmit = async data => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagestorage_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if(result.success){
                    const img = result.data.url
                    const doctor ={
                        name : data.name,
                        email : data.email,
                        specalist : data.specalist,
                        img : img
                    }
                    
                // send to you database
                    fetch('http://localhost:5000/doctors',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                            authorization:`Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body:JSON.stringify(doctor)
                    })
                    .then(res=>res.json())
                    .then(inserted =>{
                        if(inserted.insertedId){
                            toast.success('Doctor are added successfully')
                            reset();
                        }
                        else{
                            toast.error('Failed to add the doctor')
                        }
                    })
                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>

            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <h2 className="text-2xl">Add new doctor</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Doctor Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Doctor name"
                        className="input input-bordered w-full max-w-xs"

                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Doctor Email"
                        className="input input-bordered w-full max-w-xs"

                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Please provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">specalist</span>
                    </label>
                    <select {...register("specalist")} className="select select-bordered w-full max-w-xs">
                        {
                            services?.map(service => <option key={service._id}>{service?.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-base font-semibold">Doctor photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"

                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="flex flex-col w-full border-opacity-50">
                    <input type="submit" value="Add" className="grid btn btn-accent rounded-box place-items-center input input-bordered w-full max-w-xs" />

                </div>
            </form>
        </div>

    );
};

export default AddDoctor;