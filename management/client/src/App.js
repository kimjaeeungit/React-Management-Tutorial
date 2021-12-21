import './App.css';

import React, { Component } from 'react';
import Customer from './components/Customer';
import { Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  root : {
    width : '100%',
    margintTop : theme.spacing.unit *3,
    overFlowX : "auto"
  },
  table : {
    minWidth : 1000
  }
})

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
    //classes 변수를 만들어 위에서 정의한 styles가 적용되도록 하기
    const{ classes } = this.props;
    return (
      //map을 사용할때는 key라는 이름의 props를 사용해야한다.
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> );}) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
