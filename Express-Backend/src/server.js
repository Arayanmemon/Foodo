import app from './app.js'

app.listen(app.get('port') , () => {
        console.log(`Server Live on port ${app.get('port')}`)
})