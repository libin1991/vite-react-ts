import './index.less';

import React from 'react';

import clas from './index.module.less';

const Register: React.FC = () => {
  // 天然支持 ES6
  const obj = { a: 1, b: 2 };
  const mergeObj = { ...obj, c: 123 };
  return (
    <div>
      <h2>Register</h2>
      <div>content:</div>
      <div className="font">fonst size == 50px</div>
      <div className={clas.red}>{JSON.stringify(mergeObj, null, 4)}</div>
    </div>
  );
};
export default Register;