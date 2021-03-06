/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'

const ResourceCard = (props) => {
  const { title, resourceImage, description, resourceUrl, tag } = props

  return (
    <div className='p-4 sm:p-2'>
      <div className='max-w-xs overflow-hidden transition duration-150 ease-in-out transform rounded shadow-md cursor-pointer hover:shadow-lg hover:scale-105'>
        <a
          href={`http://${resourceUrl}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='w-full'
            // eslint-disable-next-line import/no-dynamic-require
            src={require(`../assets/images/resources/${resourceImage}`)}
            alt={`${title} screenshot of website`}
          />
        </a>
        <div className='px-6 py-4'>
          <a
            href={`http://${resourceUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='mb-2 text-xl font-bold text-blue-900'>{title}</div>
          </a>
          <p className='overflow-hidden text-base text-blue-700 '>
            {description}
          </p>
        </div>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block px-3 py-1 text-sm font-semibold text-blue-900 bg-teal-100 rounded-full'>
          {`#${tag}`}
        </span>
      </div>
    </div>
  )
}

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  resourceImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  resourceUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}

export default ResourceCard
