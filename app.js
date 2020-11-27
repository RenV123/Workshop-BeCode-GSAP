'use strict';

(() => {
  gsap.to('.planet-one img', 3, {
    rotation: 360,
    duration: 30,
    repeat: -1,
    ease: Linear.easeNone,
  });
  gsap.to('.planet-one img', 3, {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: Linear.easeNone,
  });

  gsap.to('.planet-two img', 3, {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: Linear.easeNone,
  });

  gsap.to('.planet-three img', 3, {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: Linear.easeNone,
  });

  const moveAstronaut = () => {
    var tl = gsap.timeline({
      repeat: 0,
      defaults: {
        duration: 2,
        ease: 'none',
      },
    });
    tl.to('.astronaut-container', {
      rotate: 360,
      duration: 5,
      repeat: -1,
    })
      .to('.astronaut-container', {
        x: 1000,
        y: -300,
        duration: 10,
      })
      .to('.astronaut-container', {
        y: -200,
        duration: 10,
      });
  };

  const moveArm = () => {
    gsap.set('#right-arm', {
      transformOrigin: '0%, 60%',
      rotation: 10,
      repeat: -1,
    });

    var tl = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 2,
      },
    });
    tl.to('#right-arm', { rotation: 45 });
    tl.to('#right-arm', { rotation: -20 });
  };

  moveAstronaut();
  moveArm();
})();
