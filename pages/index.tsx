import React from 'react';
import {Radar} from '../src';
import entries from '../entries.json';
import { Entry } from '../src/components/Radar/types';

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Radar entries={entries as Entry[]} />
    </div>
  );
};

export default TestPage;