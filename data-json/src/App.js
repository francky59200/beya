import React from 'react';
import './App.css';
import PostData from './postdata'

const DATA = [
  {
      "id": "LIB1",
      "name": "Library 1",
      "context": "C1",
      "children": [
          {
              "id": "SKI1",
              "name": "SKill 1",
              "context": "C1",
              "children": [
                  {
                      "id": "SKI11",
                      "name": "SKill 11",
                      "context": "C1"
                  },
                  {
                      "id": "SKI12",
                      "name": "SKill 12",
                      "context": "C1",
                      "children": []
                  },
                  {
                      "id": "SKI13",
                      "name": "SKill 13",
                      "context": "C1",
                      "children": [
                          {
                              "id": "SKI131",
                              "name": "SKill 131",
                              "context": "C1",
                              "children": [
                                  {
                                      "id": "SKI1311",
                                      "name": "SKill 1311",
                                      "context": "C1",
                                      "children": [
                                          {
                                              "id": "SKI13111",
                                              "name": "SKill 13111",
                                              "context": "C1"
                                          }
                                      ]
                                  }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              "id": "SKI2",
              "name": "SKill 2",
              "context": "C1",
              "children": [
                  {
                      "id": "SKI21",
                      "name": "SKill 21",
                      "context": "C1",
                      "children": [
                          null
                      ]
                  },
                  {
                      "id": "SKI22",
                      "name": "SKill 22",
                      "context": "C1"
                  }
              ]
          }
      ]
  }
]


function App() {
  return (
    <div>
      {
        DATA.map((comment) => {
          return (
            <PostData key={comment.id} comment={comment} />
          )
        })
      }
    </div>
  )
}
export default App;
