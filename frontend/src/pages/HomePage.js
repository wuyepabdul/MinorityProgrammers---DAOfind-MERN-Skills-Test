import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllDaos } from '../api/addDao';

const HomePage = ({ history }) => {
  const [listOfDaos, setListOfDaos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllDaos()
      .then((response) => {
        console.log(response);
        setListOfDaos(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <section className='container home-container'>
      {loading ? (
        'loading...'
      ) : (
        <>
          {' '}
          <div className='numberOfDaos-container d-flex'>
            <div className='numberOfDaos  p-3'>
              <h2 className='homeDaoHeading'>Number of Daos</h2>
              <h2>{listOfDaos.length}</h2>
            </div>
            <div className='numberOfDaos p-3'>
              <h2 className='homeDaoHeading'>Total AUM (USD)</h2>
              <h2>$7,747,011,573</h2>
            </div>
          </div>
          <div className='badges-container d-flex'>
            <div className='badges-list'>
              <span className='badge all rounded-pill '>All</span>
              <span className='badge rounded-pill '>Primary</span>
              <span className='badge rounded-pill '>Primary</span>
              <span className='badge rounded-pill '>Primary</span>
              <span className='badge rounded-pill '>Primary</span>
              <span className='badge rounded-pill '>Primary</span>
              <span className='badge rounded-pill '>Primary</span>
              <span className='badge rounded-pill '>Primary</span>
            </div>
            <div className='btn-container'>
              <div className='icons'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z'></path>
                </svg>
              </div>
              <div>Filters</div>
            </div>
          </div>
          <div className='table-div mt-4'>
            <table className='table'>
              <thead>
                <tr>
                  <th className='th-heading' scope='col'>
                    Name <i className='fas fa-sort-down'></i>
                  </th>
                  <th className='th-heading' scope='col'>
                    Category <i className='fas fa-sort-down'></i>
                  </th>
                  <th className='th-heading' scope='col'>
                    Aum (USD) <i className='fas fa-sort-down'></i>
                  </th>
                  <th className='th-heading' scope='col'>
                    Twitter Followers <i className='fas fa-sort-down'></i>
                  </th>
                  <th className='th-heading' scope='col'>
                    Founded Date <i className='fas fa-sort-down'></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfDaos.map((dao) => (
                  <tr
                    key={dao._id}
                    className='tr-class'
                    onClick={() => handleClick(`/dao/${dao._id}`)}
                  >
                    <td>
                      {' '}
                      <img src={dao.logo_link} alt='' />
                      {dao.full_name}
                    </td>
                    <td>category</td>
                    <td>Aum (USD)</td>
                    <td>twitter followers</td>
                    <td>{dao.date_founded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>{' '}
        </>
      )}
    </section>
  );
};

export default HomePage;
