import React, { useState } from 'react';
import { isEmpty } from 'validator';
import { createNewDao } from '../api/addDao';

const AddPage = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [daoInfo, setDaoInfo] = useState({
    email: '',
    full_name: '',
    date_founded: '',
    about_dao: '',
    logo_link: '',
    category: '',
    gov_token_name: '',
    token_symbol: '',
    blockchain: '',
    discord_link: '',
    website_link: '',
    dao_structure: '',
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
    category,
    gov_token_name,
    token_symbol,
    blockchain,
    discord_link,
    website_link,
    dao_structure,
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

  const onChange = (e) => {
    console.log(e.target.value);
    setDaoInfo({
      ...daoInfo,
      [e.target.name]: e.target.value,
    });
    setMessage('');
  };

  const createDao = (data) => {
    createNewDao(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = () => {
    console.log(email, full_name, about_dao);
  };

  return (
    <div className='addDao'>
      <form onSubmit={handleSubmit}>
        <h1 className='form-heading'>Add Dao Form</h1>
        <div className='form-container'>
          <div className='group mb-3 '>
            <label for='email' className='form-label'>
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
            <label for='fullname' className='form-label'>
              Name of Dao
            </label>
            <input
              className='form-control form-control-lg'
              onChange={onChange}
              type='text'
              name='fullName'
              value={full_name}
              id='fullname'
            />
          </div>
          <div className='group mb-3 '>
            <label for='dateFounded' className='form-label'>
              Date Founded
            </label>
            <input
              type='date'
              name='date'
              value={date_founded}
              onChange={onChange}
              className='form-control ml-3 form-control-lg'
              id='dateFounded'
            />
          </div>
          <div className='group mb-3 '>
            <label for='aboutDao' className='form-label'>
              About Your Dao
            </label>
            <input
              onChange={onChange}
              type='text'
              name='aboutDao'
              value={about_dao}
              className='form-control form-control-lg'
              id='aboutDao'
            />
          </div>
          <div className='group mb-3 '>
            <label for='logoLink' className='form-label'>
              Link to Logo
            </label>
            <input
              onChange={onChange}
              type='url'
              name='logoLink'
              value={logo_link}
              className='form-control ml-3   form-control-lg'
              id='logoLink'
            />
          </div>
          <div className='group mb-3 '>
            <label for='twitterHandle' className='form-label'>
              Twitter Handle{' '}
            </label>
            <input
              name='twitterHandle'
              onChange={onChange}
              value={twitter_handle}
              type='url'
              className='form-control form-control-lg'
              id='twitterHandle'
            />
          </div>

          <div className='group mb-3 '>
            <label for='govTokenName' className='form-label'>
              Governance Token Name
            </label>
            <input
              name='govTokenName'
              onChange={onChange}
              value={gov_token_name}
              type='text'
              className='form-control form-control-lg'
              id='govTokenName'
            />
          </div>
          <div className='group mb-3 '>
            <label for='govTokenSymbol' className='form-label'>
              Governance Token Symbol
            </label>
            <input
              name='govTokenSymbol'
              onChange={onChange}
              value={token_symbol}
              type='text'
              className='form-control ml-3   form-control-lg'
              id='govTokenSymbol'
            />
          </div>
          <div className='group mb-3 '>
            <label for='githubLink' className='form-label'>
              Github Link
            </label>
            <input
              name='githubLink'
              onChange={onChange}
              value={github_organization_handle}
              type='url'
              className='form-control form-control-lg'
              id='githubLink'
            />
          </div>

          <div className='group mb-3 '>
            <label for='daoStructure' className='form-label'>
              DAO Structure
            </label>
            <input
              name='daoStructure'
              onChange={onChange}
              value={dao_structure}
              type='text'
              className='form-control form-control-lg'
              id='daoStructure'
            />
          </div>
          <div className='group mb-3 '>
            <label for='headquarters' className='form-label'>
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
            <label for='votingProcess' className='form-label'>
              Voting Process
            </label>
            <input
              name='votingProcess'
              onChange={onChange}
              value={voting_process}
              type='text'
              className='form-control form-control-lg'
              id='votingProcess'
            />
          </div>
          <div className='group mb-3 '>
            <label for='totalValueLocked' className='form-label'>
              Total Value Locked
            </label>
            <input
              name='totalValueLocked'
              onChange={onChange}
              value={total_value_locked}
              type='text'
              className='form-control form-control-lg'
              id='totalValueLocked'
            />
          </div>
          <div className='group mb-3 '>
            <label for='daoFunds' className='form-label'>
              DAO Funds
            </label>
            <input
              name='daoFunds'
              onChange={onChange}
              value={revenue_streams}
              type='text'
              className='form-control form-control-lg'
              id='daoFunds'
            />
          </div>
          <div className='group mb-3 '>
            <label for='techStack' className='form-label'>
              Tech stack
            </label>
            <input
              name='techStack'
              onChange={onChange}
              value={tech_stack}
              type='text'
              className='form-control form-control-lg'
              id='techStack'
            />
          </div>
          <div className='group mb-3 '>
            <label for='govTokenAddress' className='form-label'>
              Governance token address
            </label>
            <input
              name='govTokenAddress'
              onChange={onChange}
              value={governance_token_address}
              type='text'
              className='form-control form-control-lg'
              id='govTokenAddress'
            />
          </div>
          <div className='group mb-3 '>
            <label for='notes' className='form-label'>
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
            <label for='notes' className='form-label'>
              Description
            </label>
            <textarea
              name='description'
              onChange={onChange}
              value={description}
              type='text'
              className='form-control form-control-lg'
              id='notes'
              maxLength='2000'
            />
          </div>

          <div className='checkboxes'>
            <div className='group mb-3 '>
              <label for='blockchain' className='form-label'>
                Blockchains
              </label>
              <div class='form-check'>
                <input
                  class='form-check-input checkbox'
                  onChange={onChange}
                  type='checkbox'
                  value={blockchain}
                  id='defaultCheck1'
                />
                <label class='form-label' for='defaultCheck1'>
                  checkbox
                </label>
              </div>
            </div>
            <div className='group mb-3 '>
              <label for='blockchain' className='form-label'>
                Category
              </label>
              <div class='form-check'>
                <input
                  class='form-check-input '
                  onChange={onChange}
                  value={blockchain}
                  type='checkbox'
                  id='defaultCheck1'
                />
                <label class='form-label' for='defaultCheck1'>
                  checkbox 1
                </label>
              </div>
            </div>
            <div className='group mb-3'>
              <div class='form-check'>
                <input
                  class='form-check-input '
                  onChange={onChange}
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                  checked
                />
                <label class='form-label' for='exampleRadios1'>
                  Default radio
                </label>
              </div>
              <div class='form-check'>
                <input
                  class='form-check-input '
                  onChange={onChange}
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                />
                <label class='form-label' for='exampleRadios1'>
                  Default radio
                </label>
              </div>
            </div>
            <div className='button-div'>
              <button type='submit' className='btn btn-default btn-lg'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
