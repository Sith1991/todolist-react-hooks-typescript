import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Презентационный TodoList</h1>
        <p className="lead  fs-4">
            При разработке данного приложения использовался следующий стек технологий:
          <ol className="list-group list-group-numbered">
            <li className="list-group-item fs-4"><strong>React</strong> (Router, Hooks, Context)</li>
            <li className="list-group-item fs-4"><strong>Typescript</strong></li>
            <li className="list-group-item fs-4"><strong>Bootstrap</strong></li>
            <li className="list-group-item fs-4"><strong>SASS/SCSS</strong></li>
            <li className="list-group-item fs-4"><strong>Axios</strong></li>
          </ol>

          Backend: <a href='https://firebase.google.com/' className="link-primary fs-4" target="blank">Firebase</a>
        </p>
      </div>
    </div>
  )
};