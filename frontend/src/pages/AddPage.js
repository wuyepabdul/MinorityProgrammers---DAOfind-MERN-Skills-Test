import React from 'react';

const AddPage = () => {
  return (
    <div className='addDao'>
      <form>
        <h1 className='form-heading'>Add Dao Form</h1>
        <div className='form-container'>
          <div className='group mb-3 '>
            <label for='exampleFormControlInput1' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='form-control ml-3 form-control-lg'
              id='exampleFormControlInput1'
            />
          </div>
          <div className='group mb-3 '>
            <label for='fullname' className='form-label'>
              Name of Dao
            </label>
            <input
              type='text'
              name='fullName'
              className='form-control form-control-lg'
              id='fullname'
            />
          </div>
          <div className='group mb-3 '>
            <label for='dateFounded' className='form-label'>
              Date Founded
            </label>
            <input
              type='text'
              name='date'
              className='form-control ml-3 form-control-lg'
              id='dateFounded'
            />
          </div>
          <div className='group mb-3 '>
            <label for='aboutDao' className='form-label'>
              About Your Dao
            </label>
            <input
              type='text'
              name='aboutDao'
              className='form-control form-control-lg'
              id='aboutDao'
            />
          </div>
          <div className='group mb-3 '>
            <label for='logoLink' className='form-label'>
              Link to Logo
            </label>
            <input
              type='url'
              name='logoLink'
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
              type='text'
              className='form-control form-control-lg'
              id='daoStructure'
            />
          </div>
          <div className='group mb-3 '>
            <label for='daoMembers' className='form-label'>
              Dao Members
            </label>
            <input
              name='daoMembers'
              type='text'
              className='form-control form-control-lg'
              id='daoMembers'
            />
          </div>
          <div className='group mb-3 '>
            <label for='votingProcess' className='form-label'>
              Voting Process
            </label>
            <input
              name='votingProcess'
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
              type='text'
              className='form-control form-control-lg'
              id='notes'
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
                  type='checkbox'
                  value=''
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
                  type='checkbox'
                  value=''
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
              <button className='btn btn-default btn-lg'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
