import UserProfile from './components/UserProfile';
function App() {
  return (
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Brian" age="30" bio="Enjoys coding and football" />
      <UserProfile
        name="Cynthia"
        age="22"
        bio="Passionate about fashion and travel"
      />
    </div>
  );
}
export default App;
