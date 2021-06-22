import User from './components/User'
import Form from './components/Form'
import Lists from './components/Lists'

function App() {
	return (
		<div className="container">
			<div className="alert alert-primary my-3">
				<h2>react-redux를 배워보자</h2>
			</div>
			<User />
			<Form />
			<Lists />
		</div>
	)
}

export default App;
