import React from 'react';
import wikipedia from '../images/wikipedia-page-creation.png';
import daoLandscape from '../images/dao-landscape.png';
import blockchain from '../images/blockchain-council.png';

const AddPage = () => {
  return (
    <div className='learn-container'>
      <h1>Resources</h1>
      <div className='d-flex'>
        <article className='article-container d-flex'>
          <div className='img-container'>
            <img src={wikipedia} alt='wikipedia' />
          </div>
          <div className='article-writeup d-flex'>
            <h4>Decentralized Autonomous Organization</h4>
            <p>
              A decentralized autonomous organization (DAO), sometimes called a
              decentralized autonomous corporation (DAC), is an organization
              represented by rules encoded as a computer program that is
              transparent, controlled by the organization members and not
              influenced by a central government
            </p>
            <div className='article-btn'>
            <button className='btn btn-info'>Learn More <i className="fas fa-arrow-right"></i></button>
          </div>
          </div>
          
        </article>
        <article className='article-container d-flex'>
          <div className='img-container'>
            <img src={blockchain} alt='blockchain' />
          </div>
          <div className='article-writeup d-flex'>
            <h4>
              Top Decentralized Autonomous Organization (DAO) Projects To Watch
            </h4>
            <p>
              The blockchain platform introduced the tool “decentralized
              autonomous organizations (DAOs)” with the objective to support the
              decentralized business ecosystem. They play an important part in
              decentralized finance. They could play a more significant role as
              DAO infrastructure becomes more proficient, and once-overlooked
              stakeholders in finance follow up on bigger governance
              requirements
            </p>
            <div className='article-btn'>
              <button className='btn btn-info'>Learn More <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </article>
        <article className='article-container d-flex'>
          <div className='img-container'>
            <img src={daoLandscape} alt='dao landscape' />
          </div>
          <div className='article-writeup d-flex'>
            <h4>DAO Landscape</h4>
            <p>
              DAOs have taken center stage. Ever since 14% of the entire ETH
              supply was locked in The DAO in early 2016, we’ve spent the last
              five years distilling what it means to coordinate digital working
              groups. DAOs are internet communities with a shared cap table and
              bank account
            </p>
            <div className='article-btn'>
              <button className='btn btn-info'>Learn More <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AddPage;
