import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefa'
import BotaoAdicionar from '../../containers/componets/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostraFiltro={true} />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
