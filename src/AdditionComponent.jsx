// src/AdditionComponent.jsx
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

const AdditionComponent = () => {
  const intl = useIntl();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(input1) + parseFloat(input2);
    setResult(sum);
  };

  return (
    <div>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder={intl.formatMessage({ id: 'input1Placeholder' })}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder={intl.formatMessage({ id: 'input2Placeholder' })}
      />
      <button onClick={handleAddition}>
        {intl.formatMessage({ id: 'addButton' })}
      </button>
      {result !== null && (
        <div>
          {intl.formatMessage({ id: 'resultMessage' }, { result })}
        </div>
      )}
    </div>
  );
};

export default AdditionComponent;
