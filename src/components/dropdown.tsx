import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';
import * as React from 'react';
import { Fragment } from 'react';

export default function Dropdown() {
  return (
    <li className='dropdown flex items-center'>
      <Menu>
        {({ open }) => (
          <>
            <div>
              <Menu.Button className='inline-flex items-center justify-center w-full px-4 py-2 text-md font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                Explore
                <ChevronDownIcon
                  className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
                  aria-hidden='true'
                />
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                static
                className='absolute top-16 right-30 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              >
                <div className='px-1 py-1 '>
                  <Link to='/Explore/Events'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Events
                        </button>
                      )}
                    </Menu.Item>
                  </Link>
                  <Link to='/Explore/Communities'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Communities
                        </button>
                      )}
                    </Menu.Item>
                  </Link>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </li>
  );
}
