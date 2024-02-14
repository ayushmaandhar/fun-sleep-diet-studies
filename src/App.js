import Switch from 'react-switch';

import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [justToggled, setJustToggled] = useState();
  const [counter, setCounter] = useState(0);


  const handleChange = (toggle) => {
    setJustToggled(toggle);
    if (toggle == 1) {
      if(isToggled1) setCounter(counter => counter-1);
      else setCounter(counter => counter+1);
      setIsToggled1(isToggled1 => !isToggled1);
    }
    if (toggle == 2) {
      if(isToggled2) setCounter(counter => counter-1);
      else setCounter(counter => counter+1);
      setIsToggled2(isToggled2 => !isToggled2);
    }
    if (toggle == 3) {
      if(isToggled3) setCounter(counter => counter-1);
      else setCounter(counter => counter+1);
      setIsToggled3(isToggled3 => !isToggled3);
    }

  }

  const selectBetween = (nums) => {
    return Math.random() < 0.5 ? nums[0] : nums[1];
  }


  useEffect(() => {
    const nums = [];
    if (counter > 2) {

      for (let i = 1; i<=3; i++) {
        if (i != justToggled) nums.push(i);
      }

      let num = selectBetween(nums);
      handleChange(num);
    }
  }, [isToggled1, isToggled2, isToggled3]);


  return (
    <div className="App">
        <label>
          <h1>Story of my life</h1>
        </label>
      
        <div className='toggle'>
          <Switch
            onChange={() => handleChange(1)}
            checked={isToggled1}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          /> <label> Proper Sleep </label>
        </div>

        <div className='toggle'>
          <Switch
            onChange={() => handleChange(2)}
            checked={isToggled2}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          /> <label> Diet </label>
        </div>

        <div className='toggle'>
          <Switch
            onChange={() => handleChange(3)}
            checked={isToggled3}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          /> <label> Studies </label>
        </div>

    </div>
  );
}

export default App;
