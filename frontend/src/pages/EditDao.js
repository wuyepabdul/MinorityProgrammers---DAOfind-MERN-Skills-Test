import React, { useEffect, useState } from 'react';
import { isEmpty } from 'validator';
import { getDaoById, updateDao } from '../api/addDao';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const EditDao = ({ match }) => {
  const daoId = match.params.id;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState([
    'Protocol',
    'Service',
    'Grant',
    'Media',
    'Social',
    'Investment',
    'Platform',
    'Collector',
  ]);
  const [blockchain, setBlockchain] = useState([
    'Ethereum',
    'Polygon',
    'Binance_Smart_Chain',
    'Harmony',
    'Solana',
    'Algorand',
    'Stellar',
    'NEAR',
    'IBM_Blockchain',
    'Hyperledger_Fabric',
    'Tezos',
    'EOSIO',
    'Waves',
    'Riple',
  ]);

  const [dao_structure, setDao_Structure] = useState([
    'shares',
    'gov_token',
    'tbd',
  ]);

  const [daoInfo, setDaoInfo] = useState({
    email: '',
    full_name: '',
    date_founded: '',
    about_dao: '',
    logo_link: '',
    gov_token_name: '',
    token_symbol: '',
    discord_link: '',
    website_link: '',
    description: '',
    voting_process: '',
    total_value_locked: '',
    revenue_streams: '',
    tech_stack: '',
    governance_token_address: '',
    notes: '',
    twitter_handle: '',
    github_organization_handle: '',
    headquarters: '',
  });
  const {
    email,
    full_name,
    date_founded,
    about_dao,
    logo_link,
    gov_token_name,
    token_symbol,
    discord_link,
    website_link,
    description,
    voting_process,
    total_value_locked,
    revenue_streams,
    tech_stack,
    governance_token_address,
    notes,
    twitter_handle,
    github_organization_handle,
    headquarters,
  } = daoInfo;

  useEffect(() => {
    setLoading(true);
    if (daoId) {
      getDaoById(daoId)
        .then((response) => {
          setDaoInfo({
            email: response.email,
            full_name: response.full_name,
            date_founded: response.date_founded,
            about_dao: response.about_dao,
            logo_link: response.logo_link,
            gov_token_name: response.gov_token_name,
            token_symbol: response.token_symbol,
            discord_link: response.discord_link,
            website_link: response.website_link,
            description: response.description,
            voting_process: response.voting_process,
            total_value_locked: response.total_value_locked,
            revenue_streams: response.revenue_streams,
            tech_stack: response.tech_stack,
            governance_token_address: response.governance_token_address,
            notes: response.notes,
            twitter_handle: response.twitter_handle,
            github_organization_handle: response.github_organization_handle,
            headquarters: response.headquarters,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [daoId]);

  const onChange = (e) => {
    setDaoInfo({
      ...daoInfo,
      [e.target.name]: e.target.value,
    });
    setMessage('');
  };

  const handleUpdate = (data) => {
    updateDao(daoId, data)
      .then((response) => {
        console.log('response', response);
        if (response) {
          toast.success(response.message);
          history.push('/');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('error');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      
    const data = {
      email,
      full_name,
      date_founded,
      about_dao,
      logo_link,
      gov_token_name,
      token_symbol,
      discord_link,
      website_link,
      description,
      voting_process,
      total_value_locked,
      revenue_streams,
      tech_stack,
      governance_token_address,
      notes,
      twitter_handle,
      github_organization_handle,
      headquarters,
    };
    handleUpdate(data);
  };
  return (
    <div className='addDao'>
      {loading ? (
        'loading...'
      ) : (
        <form>
          <h1 className='form-heading'>Add Dao Form</h1>
          <div className='form-container'>
            <div className='group mb-3 '>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                onChange={onChange}
                type='email'
                name='email'
                value={email}
                className='form-control ml-3 form-control-lg'
                id='email'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='fullname' className='form-label'>
                Name of Dao
              </label>
              <input
                className='form-control form-control-lg'
                onChange={onChange}
                type='text'
                name='full_name'
                value={full_name}
                id='fullname'
              />
            </div>

            <div className='group mb-3 '>
              <label htmlFor='aboutDao' className='form-label'>
                About Your Dao
              </label>
              <input
                onChange={onChange}
                type='text'
                name='about_dao'
                value={about_dao}
                className='form-control form-control-lg'
                id='aboutDao'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='logoLink' className='form-label'>
                Link to Logo
              </label>
              <input
                onChange={onChange}
                type='url'
                name='logo_link'
                value={logo_link}
                className='form-control ml-3   form-control-lg'
                id='logoLink'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='twitterHandle' className='form-label'>
                Twitter Handle{' '}
              </label>
              <input
                name='twitter_handle'
                onChange={onChange}
                value={twitter_handle}
                type='url'
                className='form-control form-control-lg'
                id='twitterHandle'
              />
            </div>

            <div className='group mb-3 '>
              <label htmlFor='govTokenName' className='form-label'>
                Governance Token Name
              </label>
              <input
                name='gov_token_name'
                onChange={onChange}
                // value={gov_token_name}
                type='text'
                className='form-control form-control-lg'
                id='govTokenName'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='govTokenSymbol' className='form-label'>
                Governance Token Symbol
              </label>
              <input
                name='token_symbol'
                onChange={onChange}
                // value={token_symbol}
                type='text'
                className='form-control ml-3   form-control-lg'
                id='govTokenSymbol'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='githubLink' className='form-label'>
                Github Link
              </label>
              <input
                name='github_organization_handle'
                onChange={onChange}
                value={github_organization_handle}
                type='url'
                className='form-control form-control-lg'
                id='githubLink'
              />
            </div>

            <div className='group mb-3 '>
              <label htmlFor='headquarters' className='form-label'>
                Headquarters
              </label>
              <input
                name='headquarters'
                onChange={onChange}
                value={headquarters}
                type='text'
                className='form-control form-control-lg'
                id='headquarters'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='votingProcess' className='form-label'>
                Voting Process
              </label>
              <input
                name='voting_process'
                onChange={onChange}
                value={voting_process}
                type='text'
                className='form-control form-control-lg'
                id='votingProcess'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='totalValueLocked' className='form-label'>
                Total Value Locked
              </label>
              <input
                name='total_value_locked'
                onChange={onChange}
                value={total_value_locked}
                type='number'
                className='form-control form-control-lg'
                id='totalValueLocked'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='daoFunds' className='form-label'>
                DAO Funds
              </label>
              <input
                name='revenue_streams'
                onChange={onChange}
                value={revenue_streams}
                type='text'
                className='form-control form-control-lg'
                id='daoFunds'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='techStack' className='form-label'>
                Tech stack
              </label>
              <input
                name='tech_stack'
                onChange={onChange}
                value={tech_stack}
                type='text'
                className='form-control form-control-lg'
                id='techStack'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='govTokenAddress' className='form-label'>
                Governance token address
              </label>
              <input
                name='governance_token_address'
                onChange={onChange}
                value={governance_token_address}
                type='text'
                className='form-control form-control-lg'
                id='govTokenAddress'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='notes' className='form-label'>
                Additional notes
              </label>
              <input
                name='notes'
                onChange={onChange}
                value={notes}
                type='text'
                className='form-control form-control-lg'
                id='notes'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='description' className='form-label'>
                Description
              </label>
              <textarea
                name='description'
                onChange={onChange}
                value={description}
                type='text'
                className='form-control form-control-lg'
                id='description'
                maxLength='2000'
              />
            </div>
            <div className='group mb-3 '>
              <label htmlFor='dateFounded' className='form-label'>
                Date Founded
              </label>
              <input
                type='date'
                name='date_founded'
                value={date_founded}
                onChange={onChange}
                className='form-control ml-3 form-control-lg'
                id='dateFounded'
              />
            </div>
          </div>
          <div className='button-div '>
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn btn-default btn-lg '
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditDao;
