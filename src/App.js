import Header from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import reactImg from './assets/react.png'
import angularImg from './assets/angular.png'
import vueImg from './assets/vue.png'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <h2 className="title">Sobre</h2>
        <p className="subtitle">Os frameworks front-end contribuem muito para a agilidade no desenvolvimento de softwares, facilitando o trabalho de pessoas programadoras em diversas etapas da execução dos projetos. Mas, como os conhecimentos relacionados à tecnologia estão em constante atualização, diversos frameworks e atualizações para estes surgem a cada momento, a partir de uma dificuldade encontrada.</p>
        <h2 className="title">Tecnologias</h2>
        <section className="container">
          <Card title='React' src={reactImg} alt='React' link='https://pt-br.reactjs.org/' />
          <Card title='Angular' src={angularImg} alt='Angular' link='https://angular.io/' />
          <Card title='Vue' src={vueImg} alt='Vue' link='https://vuejs.org/' />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

