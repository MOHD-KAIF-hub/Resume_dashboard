import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';

const AnalysisResults = ({Analysis,status,setstatus}) => {
  return (
<div className={`Main ${status ? 'show' : ''} flex flex-col gap-2`}>
  {/* Header */}
  <div className='mt-4 flex w-full justify-between pr-[20%]'>
    <h1 className='text-xl font-bold'>Analysis Result</h1>
    <div onClick={() => setstatus(!status)} className="w-12 h-6 flex items-center justify-center cursor-pointer">
      <FaTimes className="text-white bg-cyan-400 rounded-2xl p-1 w-6 h-6" />
    </div>
  </div>

  {/* Analysis Results */}
  {Analysis.analysisResult.map((results, index) => (
    <div className="flex justify-center" key={index}>
      <p className='mt-3 text-sm font-bold w-1/4'>{results.value}</p>
      <div className="flex w-full">
        <div className="w-12 h-12 flex items-center justify-center">
          {results.percentage > 0 ? (
            <FaCheck className="text-white bg-green-400 rounded-2xl p-1 w-6 h-6" />
          ) : (
            <FaTimes className="text-white bg-red-400 rounded-2xl p-1 w-6 h-6" />
          )}
        </div>
        <div className='flex flex-col w-full'>
          <span className="text-sm font-bold inline-block mx-1">
            {results.percentage}% match
          </span>
          <div className="flex w-2/3 h-3 mb-4 rounded-md border relative overflow-hidden">
            <div
              style={{ width: `${results.percentage > 0 ? results.percentage : 7}%` }}
              className={`div-overlay flex flex-col justify-center ${results.percentage > 0 ? 'bg-green-500' : 'bg-red-500'} transition-all duration-500 ease-in-out rounded-l overflow-hidden`}
            ></div>
            <div
              className='absolute z-10 rounded-l bg-white h-12 right-0'
              style={{
                width: `calc(105% - ${results.percentage > 0 ? results.percentage : 7}%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  ))}

  {/* Detailed Analysis Button */}

   <div className='flex justify-center'>
    <button onClick={()=>setstatus(!status)}
      type="button"
      className="text-white w-[60%] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2 md:w-[30%]"
    >
      Close
    </button>
  </div>
</div>


  )
}

export default AnalysisResults