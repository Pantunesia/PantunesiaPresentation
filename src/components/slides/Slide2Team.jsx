import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import logo from '../../assets/logo.png';
import yoanPic from '../../assets/yoan.JPG';
import panduPic from '../../assets/pandu.png';
import doniPic from '../../assets/doni.png';
import saidPic from '../../assets/said.png';
import soniaPic from '../../assets/Sonia.png';

export const Slide2Team = memo(({ isActive, onNextSlide }) => {
  const teamMembers = [
    { name: 'Pantunesia Dev', role: '', logo: logo, isProject: true },
    { name: 'Yoan Sutrisna Nugraha', role: 'Ketua, Praktisi Pantun', pic: yoanPic },
    { name: 'Pandu Wijaya Saputra', role: 'Project Manager, Backend Developer', pic: panduPic },
    { name: 'Doni Mustasar', role: 'UI / Mobile Developer', pic: doniPic },
    { name: 'Said Fakhrur Ar Rozzie', role: 'Humaniora, Praktisi Seni', pic: saidPic },
    { name: 'Sonia', role: 'Duta Pantun, Sekretaris', pic: soniaPic },
  ];

  return (
    <Slide id={2} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Tim Pantunesia</SlideTitle>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member"
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                {member.isProject ? (
                  <div className="member-logo">
                    <img src={member.logo} alt={member.name} />
                  </div>
                ) : (
                  <div className="member-pic">
                    <img src={member.pic} alt={member.name} />
                  </div>
                )}
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide2Team.displayName = 'Slide2Team';;
