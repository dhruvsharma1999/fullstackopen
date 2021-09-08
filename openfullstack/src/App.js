function App() {
  //part one introduction to react exercise

  const course = "Half stack application development";
  const part1 = "Fundamentals of react";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;

  const Part = (props) => {
    //diving each part into seperate components

    return (
      <div>
        {props.content} {props.exercise}
      </div>
    );
  };

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <div>
        <Part content={part1} exercise={exercise1} />
        <Part content={part2} exercise={exercise2} />
        <Part content={part3} exercise={exercise3} />
      </div>
    );
  };

  const Total = (props) => {
    return <div>{props.count}</div>;
  };
  return (
    <>
      <Header course={course} />
      <Content />
      <br />
      <p>
        Total Number of Exercise
        <Total count={exercise1 + exercise2 + exercise3} />{" "}
      </p>
      {/* <h1>{course}</h1>
      <p>
        {part1}
        {exercise1}
      </p>
      <p>
        {part2}
        {exercise2}
      </p>
      <p>
        {part3}
        {exercise3}
      </p>
      <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
  */}
    </>
  );
}

export default App;
