import './App.css';

import React, { Component } from 'react';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김재은',
  'birthday' : '970220',
  'gender' : '여자',
  'job' : '취준생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김재영',
  'birthday' : '980901',
  'gender' : '여자',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '감영호',
  'birthday' : '630912',
  'gender' : '남자',
  'job' : '아빠'
}
]
class App extends Component {
  //Component란 웹문서에서 어떠한 내용을 보여주기 위한 기본적인 단위
  render() {
    return (
      //map을 사용할때는 key라는 이름의 props를 사용해야한다.
      <div>
        {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> );}) }
      </div>
    );
  }
}

export default App;
