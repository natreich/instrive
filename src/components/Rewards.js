import React from 'react';
import RewardsList from '../data/rewards';

const Rewards = () => {
  let teachers = RewardsList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} />
        <h3>{teacher.name}</h3>
        <p>{teacher.bio}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Rewards</h2>
      <ul className="group">
        {teachers}
      </ul>
    </div>
  );
}

export default Rewards;
