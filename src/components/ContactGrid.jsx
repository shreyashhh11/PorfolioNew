import React from 'react'
import { Link } from 'react-router-dom';

const ContactGrid = () => {
    return (
        <>
        <Link to='./contact'>
          <div className="Gcard lg:hover:shadow-red-500 lg:hover:bg-opacity-80 drop-shadow-md relative flex items-center text-start rounded-lg bg-white dark:bg-coffee lg:hover:dark:shadow-red-300  p-6 shadow">
            <div className="flex flex-col">
              <h2 className="text-xl dark:text-gray-100 font-bold tracking-tight text-gray-800 mb-4">Contact here</h2>
              <p className="text-lg dark:text-gray-100 text-gray-600 mb-4">
                 Let’s connect!
              </p>
            </div>
            </div>
          </Link>
        </>
    )};
export default ContactGrid;