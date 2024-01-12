import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";
import Phone from "./components/Phone";

const user1 = {
	name: "User",
	lastName: "Userenko",
};

const user2 = {
	name: "Test",
	lastName: "Testenko",
};

const user3 = {
	name: "John",
	lastName: "Doe",
};

console.log(<Greetings user={user1} />);

function App() {
	return (
		<>
			<Header />
			<MainContent />
			<Greetings user={user1} />
			<Greetings user={user2} />
			<Greetings user={user3} />
			<Phone color="black" price={15999.99} />
		</>
	);
}

export default App;
