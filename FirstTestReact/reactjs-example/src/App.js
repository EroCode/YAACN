import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class BasicCard extends React.Component {


  render() {
    const tags = this.props.tags;
    const taglist = tags.map((number) =>
    <li>{number}</li>
    );
    return (
      <div className="card card-ascard">
        <div>{this.props.title}</div>
        <ul>{taglist}</ul>
        <div>{this.props.logo}</div>
        <div>{this.props.text}</div>
        <div>{this.props.relatedurl}</div>
      </div>
    );
  }
}

class BasicSwitchOptions extends React.Component {
  constructor(props) {
    super(props);
    // this.handleFirstClick = this.handleFirstClick.bind(this);
    // this.handleSecondClick = this.handleSecondClick.bind(this);
    this.state = {isDisplayAsCard: false};
  }

  // handleFirstClick(e) {
  //   e.preventDefault();
  //   this.setState({isDisplayAsCard: false});
  // }

  // handleSecondClick(e) {
  //   e.preventDefault();
  //   this.setState({isDisplayAsCard: true});

  // }

  render() {
    const isDisplayAsCard = this.state.isDisplayAsCard;
    const options = this.props.options;
    const optionlist = this.props.optionlist;

    return (
      // <div className="">
      <div>
        <div>{this.props.switch_name}</div>
        <ul>
          { optionlist.map((value, index) => <li><a onClick={value}>{options[index]}</a></li>) }
        </ul>
        {this.props.children}
      </div>
    );
  }
};

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_for_switch: {
        label : "默认标题",
        options : ["卡片","列表","都不是"],
        cardCtnName : "card-ctn card-ctn-ascard"
      }
    }
  }

  setDisplayAsCard = (e) => {
    e.preventDefault();
    let new_data_for_switch = this.state.data_for_switch;
    new_data_for_switch.cardCtnName = "card-ctn card-ctn-ascard";
    this.setState({data_for_switch: new_data_for_switch})
  };

  setDisplayAsLine = (e) => {
    e.preventDefault();
    let new_data_for_switch = this.state.data_for_switch;
    new_data_for_switch.cardCtnName = "card-ctn";
    this.setState({data_for_switch: new_data_for_switch})
  };

  setDisplayAsNone = (e) => {
    e.preventDefault();
    let new_data_for_switch = this.state.data_for_switch;
    new_data_for_switch.cardCtnName = "";
    this.setState({data_for_switch: new_data_for_switch})
  };

  render (){
    var data = {
      title : "默认标题",
      // 问题：那种写法好
      // 用数组，因为需要数组的一些操作（map、slice）
      // tags : {
      //   {tag1 : "NO1"},
      //   {tag2 : "NO2"}
      // },
      tags : ["tag1","tag2"],
      logo : "这里未来应该是图片组件",
      // 正文
      text : "这是一段话，代表默认正文",
      relatedurl : "这里未来应该是来源url字符串（未转义）",
      // size : "默认大小" <-这种写法是不对的
      // 因为size是要给程序读的，所以要英文
      size : "defaultSize"
    };

    const options = this.state.data_for_switch.options;
    const optionlist = [this.setDisplayAsLine, this.setDisplayAsCard, this.setDisplayAsNone]

    return (
      <div>
        <div className={this.state.data_for_switch.cardCtnName}>
          <BasicCard
            tags={data.tags}
            title={data.title}
            logo={data.logo}
            text={data.text}
            relatedurl={data.relatedurl}
          />
                <BasicCard
            tags={data.tags}
            title={data.title}
            logo={data.logo}
            text={data.text}
            relatedurl={data.relatedurl}
          />
          <BasicCard
            tags={data.tags}
            title={data.title}
            logo={data.logo}
            text={data.text}
            relatedurl={data.relatedurl}
          />
          <BasicCard
            tags={data.tags}
            title={data.title}
            logo={data.logo}
            text={data.text}
            relatedurl={data.relatedurl}
          />
        </div>
        <div>
          <BasicSwitchOptions
            options={this.state.data_for_switch.options}
            switch_name={this.state.data_for_switch.label}
            optionlist={optionlist}
          >
          </BasicSwitchOptions>
        </div>
      </div>
    );
  }
}

// export default App;
export {App,MyApp};
