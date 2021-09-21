import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDaoById } from '../api/addDao';
import logo from '../images/wikipedia-page-creation.png';

const Dao = ({ match }) => {
  const daoId = match.params.id;
  const [loading, setLoading] = useState(false);
  const [daoInfo, setDaoInfo] = useState({
    full_name: '',
    date_founded: '',
    logo_link: '',
    gov_token_name: '',
    token_symbol: '',
    blockchain: '',
    discord_link: '',
    website_link: '',
    description: '',
    total_value_locked: '',
    twitter_handle: '',
    github_organization_handle: '',
    headquarters: '',
  });

  /*   useEffect(() => {
      effect
      return () => {
          cleanup
      }
  }, [input]) */

  useEffect(() => {
    if (daoId) {
      setLoading(true);
      getDaoById(daoId)
        .then((response) => {
          console.log(response);
          setDaoInfo({
            full_name: response.full_name,
            date_founded: response.date_founded,
            logo_link: response.logo_link,
            gov_token_name: response.gov_token_name,
            token_symbol: response.token_symbol,
            blockchain: response.blockchain,
            discord_link: response.discord_link,
            website_link: response.website_link,
            description: response.description,
            total_value_locked: response.total_value_locked,
            twitter_handle: response.twitter_handle,
            github_organization_handle: response.github_organization_handle,
            headquarters: response.headquarters,
          });
          setLoading(false);
        })
        .catch((error) => console.log('error', error.message));
    }
  }, [daoId]);

  return (
    <section className='edit-dao-container d-flex'>
      {loading ? (
        'loading...'
      ) : (
        <>
          {' '}
          <div className='edit-img-container d-flex'>
            <div className='img-container'>
              <img src={logo} alt='' />
            </div>
            <h1>{daoInfo.full_name}</h1>
          </div>
          <div className='description-links d-flex'>
            <div className='description'>
              <h5>Description</h5>
              <p>{daoInfo.description}</p>
            </div>
            <div className='links-container d-flex'>
              <div className='links-div'>
                <h5>Links</h5>
                <span className='badge rounded-pill '>
                  {daoInfo.website_link}
                </span>
                <span className='badge rounded-pill '>
                  <Link
                    className='react-link'
                    to={daoInfo.github_organization_handle}
                  >
                    {' '}
                    Github
                  </Link>
                </span>
                <span className='badge rounded-pill '>
                  <Link className='react-link' to={daoInfo.discord_link}>
                    Discord
                  </Link>
                </span>
                <span className='badge rounded-pill '>
                  <Link className='react-link' to={daoInfo.twitter_handle}>
                    Twitter
                  </Link>
                </span>
              </div>
              <div className='tvl-div'>
                <h5>Total Value Locked (TVL)</h5>
                <h5>${daoInfo.total_value_locked}</h5>
              </div>
            </div>
          </div>
          <div className='token-container mt-5'>
            <h2 className='mb-3'>Token Information</h2>
            <table className='table token-table'>
              <tbody className='table-body'>
                <tr className='token-tr'>
                  <td>Symbol</td>
                  <td>Name</td>
                  <td>Blockchain</td>
                  <td>Headquarters</td>
                  <td>Date Founded</td>
                </tr>
                <tr className='token-tr'>
                  <td>1</td>
                  <td>Mark</td>
                  <td>{daoInfo.blockchain}</td>
                  <td> {daoInfo.headquarters} </td>
                  <td> {daoInfo.date_founded} </td>
                </tr>
              </tbody>
            </table>
          </div>{' '}
        </>
      )}
    </section>
  );
};

export default Dao;
