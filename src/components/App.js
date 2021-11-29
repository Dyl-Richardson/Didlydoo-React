import '../css/App.css';
import Events from './Events/Events';
import Form from './Form/Form';

function App() {
  return (
    <>
      <header>
        <h1>Didlydoo</h1>
        <Form />
      </header>

      <main>
        <Events />
      </main>


      {/* <table>
        <thead>
          <tr>
            <th></th>
            <th>date 1</th>
            <th>date 1</th>
            <th>date 1</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nom</td>
            <td>v</td>
            <td>v</td>
            <td>v</td>
          </tr>

          <tr>
            <td>Nom</td>
            <td>v</td>
            <td>v</td>
            <td>v</td>
          </tr>

          <tr>
            <td>Nom</td>
            <td>v</td>
            <td>v</td>
            <td>v</td>
          </tr>
        </tbody> 
      </table> */}
    </>
  );
}

export default App;
