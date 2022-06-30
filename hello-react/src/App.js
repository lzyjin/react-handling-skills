import './App.css';

function App() {
  // JSX

  // const name = '리액트';
  const name = undefined;
  const title = '리액트';
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜표기법으로 작성한다.
    backgroundColor: '#000',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 // 단위를 생략하면 px로 지정된다.
  };
  // return (
      // <div>
      //   <h1>{name} 안녕</h1>
      // </div>

      // <div>
      //   {name === '리액트' ?
      //   <h1>리액트 입니다.</h1> :
      //   <h1>리액트가 아닙니다.</h1>
      //   }
      // </div>

      // <div>
      //   {name === '리액트' ? <h1>리액트입니다.</h1> : null}
      // </div>
      // null을 랜더링하면 아무것도 보여주지 않는다

      // 위와 동일한 작업이지만 더 짧은 코드로 적으면
      // <div>
      //   {name === '리액트' && <h1>리액트입니다.</h1>}
      // </div>
      // && 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때 null과 마찬가지로 아무것도 나타나지 않기 때문.

      // 하지만 falsy값인 0은 예외적으로 화면에 나타난다.
      // 0 && <div>내용</div>
  // );
  // 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안된다.
  // return name; // 책에서는 오류가 발생한다고 써있는데 나는 오류가 안난다
  // 어떤 값이 undefined일 수도 있다면, || 연산자를 사용하면 해당 값이 undefined 일 때 사용할 값을 지정할 수 있으므로 간단하게 오류를 방지할 수 있다.
  // return name || '값이 undefined입니다.';

  // 반면 JSX 내부에서 undefined을 렌더링하는 것은 괜찮다.
  // return <div>{name}</div>;

  // name값이 undefined일 때 보여주고 싶은 문구가 있다면 다음과 같이 작성하면 된다.
  // return <div>{name || '리액트'}</div>;

  // 인라인 스타일링
  // style 객체를 미리 선언하고 div의 style값으로 지정
  // return <div style={style}>{title}</div>;

  // 바로 style값을 지정
  // return <div style={{
  //   // background-color는 backgroundColor와 같이 -가 사라지고 카멜표기법으로 작성한다.
  //   backgroundColor: '#000',
  //   color: 'aqua',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: 16 // 단위를 생략하면 px로 지정된다.
  // }}>{title}</div>;

  // 클래스 지정은 class 대신에 className
  // return <div class="react">{title}</div>; // Warning: Invalid DOM property `class`. Did you mean `className`?
  // return <div className="react">{title}</div>;

  // 꼭 닫아야하는 태그
  // return (
  //   <>
  //     <div className="react">{title}</div>
  //     {/*<input> 태그를 닺지 않아서 에러 발생*/}
  //     <input></input>
  //   </>
  // );

  // self-closing 태
  // 태그 사이에 내용이 들어가지 않는 경우에 다음과 같이 적을 수 있다.
  // 태그를 선언하면서 동시에 닫을 수 있는 태그다.
  return (
      <>
          <div className="react">{title}</div>
      <input/>
      </>
  );

  // 주석
  // return (
  //     <>
  //       {/*주석은 이렇게 작성한다.*/}
  //       <div className="react" // 시작태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있다.
  //       >{title}
  //       </div>
  //       <input/>
  //       // 하지만 이런 주석이나
  //       /* 이런 주석은 페이지에 그대로 나타난다. */
  //     </>
  // );
}



export default App;
