import React from 'react'
import Router from './Router'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme)=>({
  root: {
    padding: "96px 0",
    backgroundColor: theme.palette.primary.light,
  }
}))
const App = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.root}>
        <Router />
      </main>
   </>
  )
}

export default App;