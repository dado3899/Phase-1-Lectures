function getWorkspaces(){
    fetch("http://localhost:3000/workspaces")
    .then(r => r.json())
    .then(data => {
      console.log("Data")
      console.log(data) // all workspaces
      // console.log(data.taskLister[1].tasks)
      for (let workspace in data){ // workspace obj
        console.log("Workspace")
        console.log(data[workspace])
        for (let list in data[workspace]){ // workspace lists
          console.log(workspace + " list")
        //   console.log(data[workspace][list])
          console.log(list)
          // for (let task in list){
          //   console.log("task")
          //   console.log(data[workspace][list])
          // }
        }
      }
    })
  }

getWorkspaces()