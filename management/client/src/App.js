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
import { CircularProgress } from '@material-ui/core';

const styles = theme =>({
  root : {
    width : '100%',
    margintTop : theme.spacing.unit *3,
    overFlowX : "auto"
  },
  table : {
    minWidth : 1000
  },
  progress:{
    margin : theme.spacing.unit * 2
  }
})


class App extends Component {
  //고객데이터는 처음에 비어있다가 서버로부터 데이터를 받으면 그때 데이터가 재구성
  //데이터가 변경될 수 있어서 state로 customer변수를 명시
  state = {
    customers : "",
    completed : 0
  }
  //api서버에 접근해서 데이터를 받아오는 작업
  //모든 컴포넌트가 mount가 되었을때 실행되는 부분(준비가 완료된 상태)
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);//timer를 이용해서 0.02초마다 progress함수가 실행되도록 설정
    //담긴 데이터가 body인데 callApi()가 불러와져서 
    this.callApi() 
      .then(res => this.setState({customers : res})) //then함수로 하여금 res로 변수의 이름이 바뀌고 customers라는 state의 변수에 값을 넣어줌
      .catch(err => console.log(err)); //오류 발생하면 오류 출력
  }
  //callApi는 비동기적으로 내용 수행
  //API서버에 접속을 해서 데이터를 받아오는 함수
  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  //progress라는 애니메이션을 위한 함수를 명시
  progress = () => {
    const { completed } = this.state; //state변수 가져오기
    //progress함수가 불러와짐으로써 completed변수의 값이 바뀔수 있도록 설정
    this.setState({ completed: completed >= 100 ? 0 : completed +1});//completed가 100이 되는 순간 0으로 줄어들게 하고 그렇지 않으면 계속해서 1씩증가하게 하기
  }

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
          {this.state.customers ? this.state.customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> );
          }) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress className={classes.progress} variant='indeterminate' value={this.state.completed}/>
            </TableCell>
          </TableRow>
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
