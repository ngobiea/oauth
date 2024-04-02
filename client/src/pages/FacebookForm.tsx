import { objectives, status } from './utils/facebook';
import { useForm, SubmitHandler } from 'react-hook-form';
import { usePostFacebookAdsMutation } from '../store/apis/facebookApi';
import { useEffect } from 'react';
const FacebookForm = () => {
  const [postAds, { error, isSuccess, isError, data }] =
    usePostFacebookAdsMutation();
  const { register, handleSubmit } = useForm<FacebookAdsForm>();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error, isSuccess, isError]);
  const onSubmit: SubmitHandler<FacebookAdsForm> = (body) => {
    console.log(body);
    postAds({ body });
  };
  return (
    <div className=' h-screen flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' w-1/3 mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
      >
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            id='campaignName'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            {...register('campaignName')}
          />
          <label
            htmlFor='campaignName'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Campaign Name
            <span className='text-red-500'>{' *'}</span>
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <label className='block mb-2 text-sm  text-gray-500 dark:text-gray-400'>
            Select {'Select Campaign objective'}{' '}
            {<span className='text-red-500'>*</span>}
          </label>
          <select
            {...register('campaignObjectives')}
            id='underline_select'
            className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            {objectives.map(({ id, value }) => {
              return (
                <option key={id} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <label className='block mb-2 text-sm  text-gray-400 dark:text-gray-400'>
            Select {'Select Campaign status'}{' '}
            {<span className='text-red-500'>*</span>}
          </label>
          <select
            {...register('campaignStatus')}
            id='underline_select'
            className='block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
          >
            {status.map(({ id, value }) => {
              return (
                <option key={id} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FacebookForm;
