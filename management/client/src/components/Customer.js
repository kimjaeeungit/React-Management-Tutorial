import React from "react"; 
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    //render()는 항상 수행되는 내용으로써 Customer라는 컴포넌트를 실제 화면에 그리고자 할때 수행
    render(){
        return(
            //props는 기본적으로 react component가 포함하고있는 내용이라 this키워드를 이용하기
            //jsx문법은 두개이상의 요소가 있을시 반드시 div같은 태그로 감싸야 한다.
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        ); 
    }
}

export default Customer;