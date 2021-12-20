import React from "react"; 

class Customer extends React.Component{
    //render()는 항상 수행되는 내용으로써 Customer라는 컴포넌트를 실제 화면에 그리고자 할때 수행
    render(){
        return(
            //props는 기본적으로 react component가 포함하고있는 내용이라 this키워드를 이용하기
            //jsx문법은 두개이상의 요소가 있을시 반드시 div같은 태그로 감싸야 한다.
            <div>
               <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
               <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        ); 
    }
}

//이미지 이름 아이디 값 출력
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );

    }
}

//남은 데이터 출력
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

export default Customer;