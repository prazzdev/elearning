import React from 'react'

export default function EndpointWrapper(props) {
  const { endpointTitle, endpoint, exEndpoint = 0, jsonResponse } = props
  let exLength = exEndpoint.length > 2
  return (
    <>
    <div className="mt-3 mb-6">
        <h1 className="poppins font-semibold sm:text-md text-lg mr-3">{endpointTitle}</h1>
        <h1 className="victor font-semibold text-sm lg:text-lg my-2 ml-3">/{endpoint}</h1>
        { exLength ? <h1 className="poppins text-xs lg:text-lg mt-1 mb-2 ml-6">Example : /{exEndpoint}</h1> : ''}
        <details>
            <summary className='poppins text-sm lg:text-md ml-6'>Click to see response</summary>
            <pre className='victor font-semibold text-xs lg:text-xl w-fit bg-gray-300 drop-shadow-sm p-3 lg:p-5 my-2 lg:ml-8 rounded-lg'>
{jsonResponse}
            </pre>
        </details>
    </div>
    </>
  )
}
