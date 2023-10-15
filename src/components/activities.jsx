import React from 'react';
import Activity from './activity';
import { activities } from '../lib/data';

export default function Activities({ activeTimeframe }) {
  return (
    <div className="flex flex-col flex-wrap w-full gap-[1.875rem] md:w-[51.875rem] md:flex-row">
        {activities.map((activity, index) => (<Activity key={index} data={activity} activeTimeframe={activeTimeframe}/>))}
    </div>
  );
}