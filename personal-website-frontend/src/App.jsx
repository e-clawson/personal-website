import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/public/Eo_circle_blue_letter-e.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
           Elizabeth Clawson
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Software Engineer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Musician</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Educator</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Administrator</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
              {/* I think the above commented out line is just an example of how to disable a menu link so I will keep it for now and comment it out and delete it at the end */}
            </ul>
          </div>
        </div>
      </nav>

      <h1>Hello!</h1>
    </>
  )
}

export default App
