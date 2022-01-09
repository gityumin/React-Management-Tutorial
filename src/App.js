import logo from './logo.svg';
import './App.css';
import React from 'react'
import Customer from './components/Customer';
import { render } from '@testing-library/react';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'노유민',
  'birthday':'194244',
  'gender':'남',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'양은수',
  'birthday':'194244',
  'gender':'남',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'노수민',
  'birthday':'194244',
  'gender':'남',
  'job':'대학생'
}
]
class App extends React.Component{
  render(){
    return(
      <div>
        {customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job} />
          )
          
        })}
      </div> 
    )
  }
}

export default App;
