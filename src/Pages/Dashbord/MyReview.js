import React from 'react';
import { useForm } from 'react-hook-form';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    return (
        <div className='flex justify-center items-center'>
            <form  className='bg-slate-100 p-10 lg:px-20 my-10 rounded' >
            <h3 className="text-2xl text-success font-bold lg:py-5 text-center">Give your Review</h3>


                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder="Give Your Review"
                        className="input input-bordered input-primary w-full max-w-xs m-3"

                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <input
                        type="text"
                        placeholder="Give Your Ratings 1-5"
                        className="input input-bordered input-primary w-full max-w-xs m-3"

                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <label for="files" className={
                //   loading
                //     ? "btn btn-secondary loading mt-5 w-full max-w-xs m-3"
                     "btn btn-accent mt-5  w-full max-w-xs m-3"
                }>Upload Your Image</label>
                    <input
                        type="file"
                        id="files"
                        className="input hidden input-bordered w-full max-w-lg"

                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>


                <div className='form-control w-full max-w-xs'>
                    <input type="submit" placeholder="Type here" className="btn btn-primary w-full max-w-lg m-3" />
                </div>



            </form>
        </div>
    );
};

export default MyReview;