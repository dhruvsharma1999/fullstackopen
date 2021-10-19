function App() {
  //part one introduction to react exercise

  const course = "Half stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
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
        <Part content={parts[0].name} exercise={parts[0].exercises} />
        <Part content={parts[1].name} exercise={parts[1].exercises} />
        <Part content={parts[2].name} exercise={parts[2].exercises} />
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
        <Total
          count={parts[0].exercises + parts[1].exercises + parts[2].exercises}
        />{" "}
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
