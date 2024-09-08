import React from 'react';

const Circuit = ({ raceData }) => {
  return (
    <>
      <div className="">
        <div
          className="flex-container-space-between"
        >
          <img src={raceData?.circuit?.image} alt="trackImg" width={'150px'} />
          <hr style={{ height: '60px' }}></hr>
          <div>
            <p className="normal-head">
              {new Date(raceData?.date).toISOString().split('T')[0]}
            </p>
            <p className="normal-head">
              {
                new Date(raceData?.date)
                  .toISOString()
                  .split('T')[1]
                  .split('.')[0]
              }
            </p>
          </div>
        </div>
        <div style={{ marginTop: '5px' }}>
          <p className="heading">{raceData?.competition?.name}</p>
          <p className="normal-head">{raceData?.circuit?.name}</p>
          <p className="normal-head">
            {raceData?.competition?.location?.city} {' . '}
            {raceData?.competition?.location?.country}
          </p>
        </div>
      </div>
    </>
  );
};

export default Circuit;
